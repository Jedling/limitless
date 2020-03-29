import { MenuModel } from '@/types/MenuModel';

const menuData: MenuModel[] = [

  {
    Id: 1,
    Name: 'OM FÖRENINGEN',
    LoggedInName: 'OM FÖRENINGEN',
    Path: '/om-limitless',
  },
  {
    Id: 2,
    Name: 'SCHEMA',
    LoggedInName: 'SCHEMA',
    Path: '/schema',
  },
  {
    Id: 3,
    Name: 'KONTAKTA OSS',
    LoggedInName: 'HITTA -OCH KONTAKTA OSS',
    Path: 'hitta-oss',
  },
  {
    Id: 4,
    Name: 'TRÄNINGSPASS',
    LoggedInName: 'TRÄNINGSPASS',
    Path: '/traningspass'
  },
  {
    Id: 5,
    Name: 'HIKARI DO',
    LoggedInName: 'HIKARI DO',
    Path: '/hikari-do',
  },
  {
    Id: 6,
    Name: 'PROJEKT',
    LoggedInName: 'PROJEKT',
    Path: '/projekt',
  },
  {
    Id: 7,
    Name: 'IT-POLICY / GDPR',
    LoggedInName: 'IT-POLICY / GDPR',
    Path: '/it-policies',
  },
  {
    Id: 8,
    Name: 'PRISER',
    LoggedInName: 'PRISER',
    Path: '/priser',
  },
  {
    Id: 9,
    Name: 'PARTNERS',
    LoggedInName: 'PARTNERS',
    Path: '/partners',
  },
  {
    Id: 10,
    Name: 'LOGGA IN',
    LoggedInName: 'MITT KONTO',
    Path: '/inloggning',
  },
  {
    Id: 11,
    Name: 'NY DELTAGARE / PROVA PÅ',
    LoggedInName: 'NY DELTAGARE / PROVA PÅ',
    Path: '/ny-deltagare',
  },

 
];
const menuType: MenuModel[] = menuData;

export default menuType;