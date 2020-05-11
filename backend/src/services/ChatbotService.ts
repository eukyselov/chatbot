import elastic from 'elasticsearch';
import _ from 'lodash';

class ChatbotService {

  private client;

  constructor() {
    this.client = new elastic.Client({
      host: 'localhost:9200',
      log: 'trace',
      apiVersion: '7.2'
    });
  }

  async addQuestion(data) {
    return await this.client.create({
      index: 'chat',
      type: 'question',
      id: Math.random(),
      body: data
    });
  }

  async findAnswers(question) {
    const data = await this.client.search({
      index: 'chat',
      type: 'question',
      size: 10,
      body: {
        query: {
          bool: {
            must: [{
              query_string: {
                query: `*${question}*`,
                fields: [
                  'question'
                ],
              },
            },
            { exists: { field: 'answer' }}
            ],
          }
        }
      }
    });

    return data;
  }

  async findRandomAnswer(answers) {
    let randomAnswer;

    if (_.get(answers, 'hits.total.value', 0) > 0) {
      const ansArr = _.get(answers, 'hits.hits', []);
      randomAnswer = ansArr[Math.floor(Math.random() * ansArr.length)];
    }

    return randomAnswer;
  }
}

export default ChatbotService;
