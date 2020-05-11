const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

import _ from 'lodash';
import ChatbotService from './services/ChatbotService';
const chatbot = new ChatbotService();

app.use(express.static(`./public`));

//include client static
app.get(`/`, (_req, _res) => {
    _res.sendfile(`./public/index.html`);
});

io.on('connection', (socket) => {

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('message', async (data) => {

        // broadcast message
        io.emit('message', data);

        try {
            await chatbot.addQuestion(data);

            if (_.isNil(data.answer)) {
                const answers = await chatbot.findAnswers(data.question);
                const randomAnswer = await chatbot.findRandomAnswer(answers);

                if (_.get(randomAnswer, '_source')) {
                    const botAnswer = {
                        speaker: 'Bot',
                        question: data.question,
                        answer: _.get(randomAnswer, '_source.answer', 'Oops...')
                    }

                    io.emit('message', botAnswer);
                }
            }
        } catch(e) {
            console.log(e);
            io.emit('message', { speaker: 'Bot', question: 'Yo guys! I have some problems with recognizing your conversation. Keep going without me :(' });
        }
    })
})

http.listen(3001, () => {
    console.log('listening on *:3001');
});
