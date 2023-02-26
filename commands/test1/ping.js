const {SlashCommandBuilder} = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('command')
		.setDescription('command'),
	async execute(interaction) {
		await interaction.reply('command');
	},
};