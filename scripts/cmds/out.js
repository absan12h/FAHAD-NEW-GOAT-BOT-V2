module.exports = {
	config: {
		name: "out",
		version: "1.0",
		author: "XyryllPanget",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "",
			en: "kick 🦆 bot from gc by owner bot"
		},
		longDescription: {
			vi: "",
			en: "remove bot from group "
		},
		category: "owner",
		guide: {
			vi: "",
			en: "just write غادر"
		}
},
	onStart: async function ({ api, args, message, event }) {
		const permission = ["61568301181050"];
  if (!permission.includes(event.senderID)) {
    api.sendMessage("Amr boss Maruf ke abba dak.😴😴🌚.", event.threadID, event.messageID);
    return;
  }

			if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
				if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
	}
}
