import { DateTimeResolver, URLResolver } from 'graphql-scalars';
import { chats, messages } from '../db';

const resolvers = {
	Date: DateTimeResolver,
	URL: URLResolver,

	Chat: {
		lastMessage: (parent: any) => messages.find(m => m.id === parent.lastMessage)
	},

	Query: {
		chats: () => chats
	}
}

export default resolvers;