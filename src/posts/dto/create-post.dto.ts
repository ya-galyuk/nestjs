export class CreatePostDto {
  readonly title: string;
  readonly content: string;
  // TODO: get userId from token
  readonly userId: number;
}
