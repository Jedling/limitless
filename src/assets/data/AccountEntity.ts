import { AccountModel } from '@/types/AccountModel';

const accountData: AccountModel[] = [
  
  {
    Id: 1,
    Name: 'Eric',
    LastName: 'Svensson',
    Activated: '2020-01-01',
    Expire: '2021-01-01',
    Favorites: [
      {
        Id: 1,
        Name: 'Submission Wrestling',
      }
    ],
    TrainingDays: 12,
    Img: '',
  },
];
const accountType: AccountModel[] = accountData;

export default accountType;