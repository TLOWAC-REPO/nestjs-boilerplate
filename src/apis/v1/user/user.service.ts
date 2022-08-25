import { Injectable } from '@nestjs/common';
import { UserRepository } from 'repositories';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
        constructor(private userRepository: UserRepository) {}

        create(createUserDto: CreateUserDto) {
                return 'This action adds a new user';
        }

        findAll() {
                return this.userRepository.count();
        }

        findOne(id: number) {
                return `This action returns a #${id} user`;
        }

        update(id: number, updateUserDto: UpdateUserDto) {
                return `This action updates a #${id} user`;
        }

        remove(id: number) {
                return `This action removes a #${id} user`;
        }
}
