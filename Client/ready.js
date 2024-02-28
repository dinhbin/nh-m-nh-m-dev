const ms = require('ms');

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {

        const { user, ws } = client

        setInterval(() => {

            const ping = ws.ping

            user.setActivity({
                name: `Nhăm Nhăm Tốc Độ: ${ping} ms`,
                type: 3,
            })

        }, ms("5s"))

        console.log((`${client.user.username} is now online.`));
        console.log(`Make sure to join the support server if you need any help: https://discord.gg/nnKCh8scEJ`);

    },
};