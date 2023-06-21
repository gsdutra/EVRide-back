import * as chatRepository from '../repositories/chat-repository';

export async function createChat(listingId: number, userId: number, buyerId: number) {
	const verifyChat = await chatRepository.verifyChat(listingId, userId, buyerId);
	if (verifyChat) return verifyChat.id;
	const chat = await chatRepository.createChat(listingId, userId, buyerId);
	return chat.id
}

export async function getChatsByUserId(userId: number) {
	const chatsAsSeller = await chatRepository.getChatsByUserIdAsSeller(userId);
	const chatsAsBuyer = await chatRepository.getChatsByUserIdAsBuyer(userId);
	return {chatsAsSeller, chatsAsBuyer};
}

export async function getMessagesByChatId(userId: number, chatId: number) {
	const chat = await chatRepository.getMessagesByChatId(userId);
	if (!chat) throw { status: 404, message: 'Chat not found' };
	if (chat.buyerId !== userId && chat.sellerId !== userId) throw { status: 403, message: 'Forbidden' };
	return chat;
}

export async function createMessage(message: string, chatId: number, userId: number) {
	const chat = await chatRepository.getChatById(chatId);
	if (!chat) throw { status: 404, message: 'Chat not found' };
	if (chat.buyerId !== userId && chat.sellerId !== userId) throw { status: 403, message: 'Forbidden' };
	const updateChat = await chatRepository.updateChat(chatId);
	return chatRepository.createMessage(message, chatId, userId, chat.buyerId === userId ? chat.sellerId : chat.buyerId);
}