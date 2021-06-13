import { Company } from './company';
import { Person } from './person';

export class Alert {
  id: number;
  company: Company;
  user: Person;
  closed: Date;
  opened: Date;
  type: string;
  gainLoss: number;
  likesCount: number;
  liked: boolean;
  savedCount: number;
  saved: boolean;
  commentsCount: number;
  commented: boolean;
  top: boolean;
}
