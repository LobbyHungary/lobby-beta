const TempChannels = require("discord-temp-channels");

module.exports = {
    name: "voiceStateUpdate",
    async execute(client) {
        const tempChannels = new TempChannels(client);

        tempChannels.registerChannel("1079428177098706995", {
            childCategory: "1079427918607958148",
            childAutoDeleteIfEmpty: true,
            childAutoDeleteIfOwnerLeaves: false,
            childFormat: (member) => `${member.user.username} szobája`
        });

        tempChannels.registerChannel("1079428218966257835", {
            childCategory: "1079427918607958148",
            childMaxUsers: 2,
            childAutoDeleteIfEmpty: true,
            childAutoDeleteIfOwnerLeaves: false,
            childFormat: (member) => `${member.user.username} szobája`
        });

        tempChannels.registerChannel("1079428240764055602", {
            childCategory: "1079427918607958148",
            childMaxUsers: 3,
            childAutoDeleteIfEmpty: true,
            childAutoDeleteIfOwnerLeaves: false,
            childFormat: (member) => `${member.user.username} szobája`
        });

        tempChannels.registerChannel("1079428337614729326", {
            childCategory: "1079427918607958148",
            childMaxUsers: 4,
            childAutoDeleteIfEmpty: true,
            childAutoDeleteIfOwnerLeaves: false,
            childFormat: (member) => `${member.user.username} szobája`
        });

        tempChannels.registerChannel("1079428364059820082", {
            childCategory: "1079427918607958148",
            childMaxUsers: 5,
            childAutoDeleteIfEmpty: true,
            childAutoDeleteIfOwnerLeaves: false,
            childFormat: (member) => `${member.user.username} szobája`
        });

        tempChannels.registerChannel("1079428385677250570", {
            childCategory: "1079427918607958148",
            childMaxUsers: 8,
            childAutoDeleteIfEmpty: true,
            childAutoDeleteIfOwnerLeaves: false,
            childFormat: (member) => `${member.user.username} szobája`
        });

        tempChannels.registerChannel("1079428411367366777", {
            childCategory: "1079427918607958148",
            childMaxUsers: 10,
            childAutoDeleteIfEmpty: true,
            childAutoDeleteIfOwnerLeaves: false,
            childFormat: (member) => `${member.user.username} szobája`
        });

        tempChannels.registerChannel("1079428433358098503", {
            childCategory: "1079427918607958148",
            childMaxUsers: 12,
            childAutoDeleteIfEmpty: true,
            childAutoDeleteIfOwnerLeaves: false,
            childFormat: (member) => `${member.user.username} szobája`
        });

        tempChannels.registerChannel("1079428459010461836", {
            childCategory: "1079427918607958148",
            childMaxUsers: 16,
            childAutoDeleteIfEmpty: true,
            childAutoDeleteIfOwnerLeaves: false,
            childFormat: (member) => `${member.user.username} szobája`
        });

        tempChannels.registerChannel("1079428483152871455", {
            childCategory: "1079427918607958148",
            childMaxUsers: 24,
            childAutoDeleteIfEmpty: true,
            childAutoDeleteIfOwnerLeaves: false,
            childFormat: (member) => `${member.user.username} szobája`
        });

        tempChannels.on("childCreate", (member) => {
            const tempRole = member.guild.roles.cache.get('1079423591579406477')
            const verification = member.guild.roles.cache.get('1077342026191867934')

            try {
                setTimeout(() => {
                    member.roles.add(tempRole)
                }, 1000)
            } catch (err) {
                console.log(err)
                throw err
            }

            setTimeout(() => {
                const normalChannel = member.voice.channel
                    normalChannel.permissionOverwrites.set([
                        { id: verification.id, deny: ["VIEW_CHANNEL"] }
                    ])
            }, 1000)
        });
    }
}