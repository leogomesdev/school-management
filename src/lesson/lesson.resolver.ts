import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './dto/create-lesson.input';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(() => LessonType)
  lesson(@Args('id') id: string): Promise<Lesson> {
    return this.lessonService.getLesson(id);
  }

  @Query(() => [LessonType])
  lessons(): Promise<Lesson[]> {
    return this.lessonService.getLessons();
  }

  @Mutation(() => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ): Promise<Lesson> {
    return this.lessonService.createLesson(createLessonInput);
  }
}
