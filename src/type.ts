export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
  /** 
 * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
 **/
  DateTime: any,
  /** 
 * A date string, such as 2007-12-03, compliant with the `full-date` format
   * outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 **/
  Date: any,
  /** 
 * A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format
   * outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 **/
  Time: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};






export type AudioMaterial = {
   __typename?: 'AudioMaterial',
  src?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type AudioSegment = {
   __typename?: 'AudioSegment',
  start?: Maybe<Scalars['Float']>,
  end?: Maybe<Scalars['Float']>,
  raw?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type AudioText = {
   __typename?: 'AudioText',
  paragraphs?: Maybe<Array<Paragraph>>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Choice = {
   __typename?: 'Choice',
  image?: Maybe<Scalars['String']>,
  option?: Maybe<Scalars['String']>,
  text: Scalars['String'],
};



export type Exam = {
   __typename?: 'Exam',
  id: Scalars['ID'],
  name: Scalars['String'],
  status: ExamStatus,
};

export enum ExamStatus {
  Visible = 'Visible',
  Invisible = 'Invisible'
}

export type Exercise = {
   __typename?: 'Exercise',
  id: Scalars['ID'],
  name: Scalars['String'],
};


export type Mutation = {
   __typename?: 'Mutation',
  hello?: Maybe<Scalars['String']>,
  createUser: User,
  createUserToken?: Maybe<Scalars['String']>,
  updateUserToken: Scalars['String'],
};


export type MutationCreateUserArgs = {
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationCreateUserTokenArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};

export type Paragraph = {
   __typename?: 'Paragraph',
  id?: Maybe<Scalars['ID']>,
  text?: Maybe<Array<AudioSegment>>,
  type?: Maybe<Scalars['String']>,
};

export type Practice = {
   __typename?: 'Practice',
  id: Scalars['ID'],
  name: Scalars['String'],
  canListensiveListening: Scalars['Boolean'],
  questions?: Maybe<Array<Question>>,
};

export enum PracticeStatus {
  Done = 'DONE',
  Undo = 'UNDO'
}

export type Query = {
   __typename?: 'Query',
  hello?: Maybe<Scalars['String']>,
  graphqlError: Scalars['Int'],
  reqError?: Maybe<Scalars['Int']>,
  dbError?: Maybe<Scalars['Int']>,
  readError?: Maybe<Scalars['Int']>,
  exception?: Maybe<Scalars['Int']>,
  typeError?: Maybe<Scalars['Int']>,
  cache?: Maybe<Scalars['Int']>,
  authInfo?: Maybe<Scalars['Int']>,
  forbidden?: Maybe<Scalars['Int']>,
  exams?: Maybe<Array<Exam>>,
  exam?: Maybe<Exam>,
  exercises?: Maybe<Array<Exercise>>,
  exercise?: Maybe<Exercise>,
  listensivePractices?: Maybe<Array<Practice>>,
  practice?: Maybe<Practice>,
  chooseQuestions?: Maybe<Array<Question>>,
  todayIeltsListenQuestion: Question,
  ieltsListenQuestions?: Maybe<Array<Question>>,
  questions?: Maybe<Array<Question>>,
  question?: Maybe<Question>,
  subjects?: Maybe<Array<Subject>>,
  subject?: Maybe<Subject>,
  todos?: Maybe<Array<Todo>>,
  todo?: Maybe<Todo>,
  users?: Maybe<Array<User>>,
};


export type QueryExamArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryExerciseArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryListensivePracticesArgs = {
  page?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>
};


export type QueryPracticeArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryChooseQuestionsArgs = {
  examId?: Maybe<Scalars['Int']>,
  page?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>
};


export type QueryIeltsListenQuestionsArgs = {
  page?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>
};


export type QueryQuestionArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QuerySubjectArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryTodoArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryUsersArgs = {
  page?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>
};

export type Question = {
   __typename?: 'Question',
  id: Scalars['ID'],
  name: Scalars['String'],
  type: QuestionType,
  extra?: Maybe<QuestionExtra>,
  difficulty?: Maybe<QuestionDifficulty>,
  materials: Array<QuestionMaterial>,
  exam: Exam,
  subject: Subject,
  updatedAt: Scalars['DateTime'],
  createdAt: Scalars['DateTime'],
};

export enum QuestionDifficulty {
  Easy = 'Easy',
  Hard = 'Hard',
  Medium = 'Medium'
}

export type QuestionExtra = {
   __typename?: 'QuestionExtra',
  audioText: AudioText,
  audioMaterial: AudioMaterial,
  instructions?: Maybe<Scalars['JSON']>,
  imageMaterial?: Maybe<Scalars['JSON']>,
  answerAnalysis?: Maybe<Scalars['JSON']>,
  instructionalAudio?: Maybe<Scalars['JSON']>,
  headingNumber?: Maybe<Scalars['String']>,
};

export type QuestionMaterial = {
   __typename?: 'QuestionMaterial',
  id: Scalars['ID'],
  rank: Scalars['Int'],
  qNum: Array<Scalars['Int']>,
  audio?: Maybe<Scalars['JSON']>,
  answer?: Maybe<Scalars['JSON']>,
  choices?: Maybe<Array<Choice>>,
  question: Question,
};

export enum QuestionType {
  Speaking = 'Speaking',
  Drag = 'Drag',
  ChooseMany = 'ChooseMany',
  SortPointSelect = 'SortPointSelect',
  FollowUp = 'FollowUp',
  PointSelect = 'PointSelect',
  Judge = 'Judge',
  SubjectBlank = 'SubjectBlank',
  Blank = 'Blank',
  BlankTable = 'BlankTable',
  ChooseOne = 'ChooseOne'
}

export type Subject = {
   __typename?: 'Subject',
  id: Scalars['ID'],
  name: Scalars['String'],
  status: SubjectStatus,
  exam: Exam,
};

export enum SubjectStatus {
  Visible = 'Visible',
  Invisible = 'Invisible'
}


export type Todo = {
   __typename?: 'Todo',
  id: Scalars['ID'],
  name: Scalars['String'],
  status: TodoStatus,
  createTime: Scalars['DateTime'],
  user: User,
};

export enum TodoStatus {
  Done = 'DONE',
  Undo = 'UNDO'
}


export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  email: Scalars['String'],
  createTime: Scalars['DateTime'],
  todos?: Maybe<Array<Todo>>,
};


export type UserTodosArgs = {
  page?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>
};
