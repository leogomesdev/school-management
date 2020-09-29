import { ParseUUIDPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { CreateStudentInput } from './dto/create-student.input';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => StudentType)
  student(@Args('id', ParseUUIDPipe) id: string): Promise<Student> {
    return this.studentService.getStudent(id);
  }

  @Query(() => [StudentType])
  students(): Promise<Student[]> {
    return this.studentService.getStudents();
  }

  @Mutation(() => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudentInput);
  }
}
