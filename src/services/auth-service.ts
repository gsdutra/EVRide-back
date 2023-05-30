import * as authRepository from '@/repositories/auth-repository';

export async function createUser(email: string, password: string, name: string, type: string) {
	if (!email || !password || !name || !type) throw { status: 400, message: 'Missing credentials' };
	if (password.length < 5) throw { status: 400, message: 'Password must be at least 5 characters long' };
	const verifyDuplicateUser = await authRepository.verifyUser(email);
	if (verifyDuplicateUser) throw { status: 409, message: 'User already exists' };
	return authRepository.createUser(email, password, name, type);
}