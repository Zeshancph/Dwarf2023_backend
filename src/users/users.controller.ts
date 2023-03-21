// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';

// @Controller('users')
// export class ProblemsController {
//   constructor(private readonly usersService: UsersService) {}

//   @Post('/newuser')
//   create(@Body() createUserDto: CreateUserDto) {
//     return this.usersService.create(createUserDto.username, createUserDto.password);

//   }

// //   @Get()
// //   findAll() {
// //     return this.problemsService.findAll();
// //   }

// //   @Get(':id')
// //   findOne(@Param('id') id: string) {
// //     return this.problemsService.findOne(+id);
// //   }

//   // @Patch(':id')
//   // update(@Param('id') id: string, @Body() updateProblemDto: UpdateProblemDto) {
//   //   return this.problemsService.update(+id, updateProblemDto);
//   // }

// //   @Delete(':id')
// //   remove(@Param('id') id: string) {
// //     return this.usersService.remove(+id);
// //   }
// //}
