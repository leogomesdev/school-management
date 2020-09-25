import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { Lesson } from './lesson.entity';

@Resolver(() => LessonType)
export class LessonResolver {
  @Query(() => LessonType)
  lesson(): LessonType {
    return {
      id: 'xpto',
      name: 'Physics class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation(() => LessonType)
  createLesson(): any {
    return new Lesson();
  }
}
