const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const lodashId = require('lodash-id')

const adapter = new FileSync('db.json')
const db = low(adapter)
db._.mixin(lodashId)

db.defaults({ transactions: [] }).write()

const data = [
  {
    id: 2,
    name: 'Coffe',
    date: '2021-06-04',
    amount: 4.5,
    category: {
      id: 1,
      value: 'eating_out',
      label: 'Eating out',
      published_at: '2021-06-05T09:44:19.700Z',
      created_at: '2021-06-05T09:42:06.490Z',
      updated_at: '2021-06-08T14:43:53.617Z',
    },
    type: {
      id: 1,
      value: 'expense',
      label: 'Expense',
      published_at: '2021-06-05T09:43:57.107Z',
      created_at: '2021-06-05T09:43:39.281Z',
      updated_at: '2021-06-05T09:43:57.124Z',
    },
    published_at: '2021-06-05T10:00:36.306Z',
    created_at: '2021-06-05T10:00:36.310Z',
    updated_at: '2021-06-15T17:15:48.517Z',
  },
  {
    id: 3,
    name: 'iPad',
    date: '2021-06-04',
    amount: 900,
    category: {},
    type: {},
    published_at: '2021-06-05T10:00:55.888Z',
    created_at: '2021-06-05T10:00:55.892Z',
    updated_at: '2021-06-15T17:07:20.231Z',
  },
  {
    id: 4,
    name: 't-shirts',
    date: '2021-06-02',
    amount: 900,
    category: {
      id: 3,
      value: 'electronics',
      label: 'Electronics',
      published_at: '2021-06-05T09:56:55.650Z',
      created_at: '2021-06-05T09:56:53.573Z',
      updated_at: '2021-06-05T09:56:55.666Z',
    },
    type: {
      id: 1,
      value: 'expense',
      label: 'Expense',
      published_at: '2021-06-05T09:43:57.107Z',
      created_at: '2021-06-05T09:43:39.281Z',
      updated_at: '2021-06-05T09:43:57.124Z',
    },
    published_at: '2021-06-05T10:01:27.478Z',
    created_at: '2021-06-05T10:01:27.479Z',
    updated_at: '2021-06-05T10:01:27.493Z',
  },
  {
    id: 5,
    name: 't-shirts',
    date: '2021-06-02',
    amount: 9,
    category: {
      id: 3,
      value: 'electronics',
      label: 'Electronics',
      published_at: '2021-06-05T09:56:55.650Z',
      created_at: '2021-06-05T09:56:53.573Z',
      updated_at: '2021-06-05T09:56:55.666Z',
    },
    type: {
      id: 1,
      value: 'expense',
      label: 'Expense',
      published_at: '2021-06-05T09:43:57.107Z',
      created_at: '2021-06-05T09:43:39.281Z',
      updated_at: '2021-06-05T09:43:57.124Z',
    },
    published_at: '2021-06-05T10:01:33.419Z',
    created_at: '2021-06-05T10:01:33.421Z',
    updated_at: '2021-06-05T10:01:33.433Z',
  },
  {
    id: 6,
    name: 't-shirts',
    date: '2021-05-02',
    amount: 9,
    category: {
      id: 3,
      value: 'electronics',
      label: 'Electronics',
      published_at: '2021-06-05T09:56:55.650Z',
      created_at: '2021-06-05T09:56:53.573Z',
      updated_at: '2021-06-05T09:56:55.666Z',
    },
    type: {
      id: 1,
      value: 'expense',
      label: 'Expense',
      published_at: '2021-06-05T09:43:57.107Z',
      created_at: '2021-06-05T09:43:39.281Z',
      updated_at: '2021-06-05T09:43:57.124Z',
    },
    published_at: '2021-06-05T10:01:38.191Z',
    created_at: '2021-06-05T10:01:38.194Z',
    updated_at: '2021-06-05T10:01:38.205Z',
  },
  {
    id: 7,
    name: 'sneakers',
    date: '2021-05-02',
    amount: 233,
    category: {},
    type: {},
    published_at: '2021-06-05T10:01:53.284Z',
    created_at: '2021-06-05T10:01:53.286Z',
    updated_at: '2021-06-15T17:09:46.256Z',
  },
  {
    id: 8,
    name: 'sneakers',
    date: '2020-05-02',
    amount: 34,
    category: {
      id: 2,
      value: 'clothes',
      label: 'Clothes',
      published_at: '2021-06-05T09:44:11.539Z',
      created_at: '2021-06-05T09:44:09.658Z',
      updated_at: '2021-06-05T09:44:11.553Z',
    },
    type: {
      id: 1,
      value: 'expense',
      label: 'Expense',
      published_at: '2021-06-05T09:43:57.107Z',
      created_at: '2021-06-05T09:43:39.281Z',
      updated_at: '2021-06-05T09:43:57.124Z',
    },
    published_at: '2021-06-05T10:02:01.184Z',
    created_at: '2021-06-05T10:02:01.187Z',
    updated_at: '2021-06-05T10:02:01.194Z',
  },
  {
    id: 9,
    name: 'ice cream',
    date: '2020-05-02',
    amount: 34,
    category: {
      id: 1,
      value: 'eating_out',
      label: 'Eating out',
      published_at: '2021-06-05T09:44:19.700Z',
      created_at: '2021-06-05T09:42:06.490Z',
      updated_at: '2021-06-08T14:43:53.617Z',
    },
    type: {
      id: 1,
      value: 'expense',
      label: 'Expense',
      published_at: '2021-06-05T09:43:57.107Z',
      created_at: '2021-06-05T09:43:39.281Z',
      updated_at: '2021-06-05T09:43:57.124Z',
    },
    published_at: '2021-06-05T10:02:26.751Z',
    created_at: '2021-06-05T10:02:26.757Z',
    updated_at: '2021-06-05T10:02:26.765Z',
  },
  {
    id: 10,
    name: 'payslip',
    date: '2020-12-01',
    amount: 4400,
    category: {
      id: 5,
      value: 'salary',
      label: 'Salary',
      published_at: '2021-06-05T09:57:20.354Z',
      created_at: '2021-06-05T09:57:19.736Z',
      updated_at: '2021-06-05T09:57:20.371Z',
    },
    type: {
      id: 2,
      value: 'income',
      label: 'Income',
      published_at: '2021-06-05T09:43:53.732Z',
      created_at: '2021-06-05T09:43:52.470Z',
      updated_at: '2021-06-05T09:43:53.747Z',
    },
    published_at: '2021-06-05T10:03:58.783Z',
    created_at: '2021-06-05T10:03:58.786Z',
    updated_at: '2021-06-15T17:11:05.070Z',
  },
  {
    id: 11,
    name: 'payslip',
    date: '2021-01-01',
    amount: 3400,
    category: {
      id: 1,
      value: 'eating_out',
      label: 'Eating out',
      published_at: '2021-06-05T09:44:19.700Z',
      created_at: '2021-06-05T09:42:06.490Z',
      updated_at: '2021-06-08T14:43:53.617Z',
    },
    type: {},
    published_at: '2021-06-05T10:04:06.112Z',
    created_at: '2021-06-05T10:04:06.119Z',
    updated_at: '2021-06-05T10:04:06.138Z',
  },
  {
    id: 12,
    name: 'payslip',
    date: '2021-01-01',
    amount: 3400,
    category: {
      id: 5,
      value: 'salary',
      label: 'Salary',
      published_at: '2021-06-05T09:57:20.354Z',
      created_at: '2021-06-05T09:57:19.736Z',
      updated_at: '2021-06-05T09:57:20.371Z',
    },
    type: {
      id: 2,
      value: 'income',
      label: 'Income',
      published_at: '2021-06-05T09:43:53.732Z',
      created_at: '2021-06-05T09:43:52.470Z',
      updated_at: '2021-06-05T09:43:53.747Z',
    },
    published_at: '2021-06-05T10:04:14.167Z',
    created_at: '2021-06-05T10:04:14.170Z',
    updated_at: '2021-06-05T10:04:14.177Z',
  },
  {
    id: 13,
    name: 'payslip',
    date: '2021-02-01',
    amount: 3400,
    category: {
      id: 5,
      value: 'salary',
      label: 'Salary',
      published_at: '2021-06-05T09:57:20.354Z',
      created_at: '2021-06-05T09:57:19.736Z',
      updated_at: '2021-06-05T09:57:20.371Z',
    },
    type: {
      id: 2,
      value: 'income',
      label: 'Income',
      published_at: '2021-06-05T09:43:53.732Z',
      created_at: '2021-06-05T09:43:52.470Z',
      updated_at: '2021-06-05T09:43:53.747Z',
    },
    published_at: '2021-06-05T10:04:17.407Z',
    created_at: '2021-06-05T10:04:17.411Z',
    updated_at: '2021-06-05T10:04:17.419Z',
  },
  {
    id: 14,
    name: 'payslip',
    date: '2021-03-01',
    amount: 3400,
    category: {
      id: 5,
      value: 'salary',
      label: 'Salary',
      published_at: '2021-06-05T09:57:20.354Z',
      created_at: '2021-06-05T09:57:19.736Z',
      updated_at: '2021-06-05T09:57:20.371Z',
    },
    type: {
      id: 2,
      value: 'income',
      label: 'Income',
      published_at: '2021-06-05T09:43:53.732Z',
      created_at: '2021-06-05T09:43:52.470Z',
      updated_at: '2021-06-05T09:43:53.747Z',
    },
    published_at: '2021-06-05T10:04:20.689Z',
    created_at: '2021-06-05T10:04:20.694Z',
    updated_at: '2021-06-05T10:04:20.709Z',
  },
  {
    id: 15,
    name: 'payslip',
    date: '2021-04-01',
    amount: 3400,
    category: {
      id: 5,
      value: 'salary',
      label: 'Salary',
      published_at: '2021-06-05T09:57:20.354Z',
      created_at: '2021-06-05T09:57:19.736Z',
      updated_at: '2021-06-05T09:57:20.371Z',
    },
    type: {
      id: 2,
      value: 'income',
      label: 'Income',
      published_at: '2021-06-05T09:43:53.732Z',
      created_at: '2021-06-05T09:43:52.470Z',
      updated_at: '2021-06-05T09:43:53.747Z',
    },
    published_at: '2021-06-05T10:04:23.392Z',
    created_at: '2021-06-05T10:04:23.400Z',
    updated_at: '2021-06-05T10:04:23.409Z',
  },
  {
    id: 16,
    name: 'payslip',
    date: '2021-05-01',
    amount: 3400,
    category: {
      id: 5,
      value: 'salary',
      label: 'Salary',
      published_at: '2021-06-05T09:57:20.354Z',
      created_at: '2021-06-05T09:57:19.736Z',
      updated_at: '2021-06-05T09:57:20.371Z',
    },
    type: {
      id: 2,
      value: 'income',
      label: 'Income',
      published_at: '2021-06-05T09:43:53.732Z',
      created_at: '2021-06-05T09:43:52.470Z',
      updated_at: '2021-06-05T09:43:53.747Z',
    },
    published_at: '2021-06-05T10:04:26.486Z',
    created_at: '2021-06-05T10:04:26.495Z',
    updated_at: '2021-06-05T10:04:26.516Z',
  },
  {
    id: 17,
    name: 'payslip',
    date: '2021-06-01',
    amount: 3400,
    category: {
      id: 5,
      value: 'salary',
      label: 'Salary',
      published_at: '2021-06-05T09:57:20.354Z',
      created_at: '2021-06-05T09:57:19.736Z',
      updated_at: '2021-06-05T09:57:20.371Z',
    },
    type: {
      id: 2,
      value: 'income',
      label: 'Income',
      published_at: '2021-06-05T09:43:53.732Z',
      created_at: '2021-06-05T09:43:52.470Z',
      updated_at: '2021-06-05T09:43:53.747Z',
    },
    published_at: '2021-06-05T10:04:29.726Z',
    created_at: '2021-06-05T10:04:29.729Z',
    updated_at: '2021-06-05T10:04:29.737Z',
  },
  {
    id: 18,
    name: 'headphones',
    date: '2021-06-08',
    amount: 400,
    category: {
      id: 3,
      value: 'electronics',
      label: 'Electronics',
      published_at: '2021-06-05T09:56:55.650Z',
      created_at: '2021-06-05T09:56:53.573Z',
      updated_at: '2021-06-05T09:56:55.666Z',
    },
    type: {
      id: 1,
      value: 'expense',
      label: 'Expense',
      published_at: '2021-06-05T09:43:57.107Z',
      created_at: '2021-06-05T09:43:39.281Z',
      updated_at: '2021-06-05T09:43:57.124Z',
    },
    published_at: '2021-06-08T15:04:54.496Z',
    created_at: '2021-06-08T15:04:54.514Z',
    updated_at: '2021-06-08T15:04:54.545Z',
  },
  {
    id: 26,
    name: 'Natacion',
    date: '2021-06-08',
    amount: 333,
    category: {
      id: 3,
      value: 'electronics',
      label: 'Electronics',
      published_at: '2021-06-05T09:56:55.650Z',
      created_at: '2021-06-05T09:56:53.573Z',
      updated_at: '2021-06-05T09:56:55.666Z',
    },
    type: {
      id: 1,
      value: 'expense',
      label: 'Expense',
      published_at: '2021-06-05T09:43:57.107Z',
      created_at: '2021-06-05T09:43:39.281Z',
      updated_at: '2021-06-05T09:43:57.124Z',
    },
    published_at: '2021-06-12T09:07:48.542Z',
    created_at: '2021-06-12T09:07:48.545Z',
    updated_at: '2021-06-12T09:07:48.558Z',
  },
  {
    id: 27,
    name: 'Natacion',
    date: '2021-06-08',
    amount: 333,
    category: {
      id: 2,
      value: 'clothes',
      label: 'Clothes',
      published_at: '2021-06-05T09:44:11.539Z',
      created_at: '2021-06-05T09:44:09.658Z',
      updated_at: '2021-06-05T09:44:11.553Z',
    },
    type: {
      id: 2,
      value: 'income',
      label: 'Income',
      published_at: '2021-06-05T09:43:53.732Z',
      created_at: '2021-06-05T09:43:52.470Z',
      updated_at: '2021-06-05T09:43:53.747Z',
    },
    published_at: '2021-06-12T09:13:57.729Z',
    created_at: '2021-06-12T09:13:57.736Z',
    updated_at: '2021-06-12T09:13:57.748Z',
  },
  {
    id: 28,
    name: 'asfdasfafas',
    date: '2021-06-08',
    amount: 3333342,
    category: {
      id: 1,
      value: 'eating_out',
      label: 'Eating out',
      published_at: '2021-06-05T09:44:19.700Z',
      created_at: '2021-06-05T09:42:06.490Z',
      updated_at: '2021-06-08T14:43:53.617Z',
    },
    type: {
      id: 2,
      value: 'income',
      label: 'Income',
      published_at: '2021-06-05T09:43:53.732Z',
      created_at: '2021-06-05T09:43:52.470Z',
      updated_at: '2021-06-05T09:43:53.747Z',
    },
    published_at: '2021-06-12T09:14:51.787Z',
    created_at: '2021-06-12T09:14:51.790Z',
    updated_at: '2021-06-12T09:14:51.798Z',
  },
  {
    id: 30,
    name: 'Natacion',
    date: '2021-06-08',
    amount: 333,
    category: {
      id: 1,
      value: 'eating_out',
      label: 'Eating out',
      published_at: '2021-06-05T09:44:19.700Z',
      created_at: '2021-06-05T09:42:06.490Z',
      updated_at: '2021-06-08T14:43:53.617Z',
    },
    type: {
      id: 1,
      value: 'expense',
      label: 'Expense',
      published_at: '2021-06-05T09:43:57.107Z',
      created_at: '2021-06-05T09:43:39.281Z',
      updated_at: '2021-06-05T09:43:57.124Z',
    },
    published_at: '2021-06-12T09:43:28.058Z',
    created_at: '2021-06-12T09:43:28.065Z',
    updated_at: '2021-06-12T09:43:28.077Z',
  },
  {
    id: 31,
    name: 'Natacionfdsasaf',
    date: '2021-06-08',
    amount: 333,
    category: {
      id: 1,
      value: 'eating_out',
      label: 'Eating out',
      published_at: '2021-06-05T09:44:19.700Z',
      created_at: '2021-06-05T09:42:06.490Z',
      updated_at: '2021-06-08T14:43:53.617Z',
    },
    type: {
      id: 1,
      value: 'expense',
      label: 'Expense',
      published_at: '2021-06-05T09:43:57.107Z',
      created_at: '2021-06-05T09:43:39.281Z',
      updated_at: '2021-06-05T09:43:57.124Z',
    },
    published_at: '2021-06-12T09:45:31.079Z',
    created_at: '2021-06-12T09:45:31.090Z',
    updated_at: '2021-06-12T09:45:31.107Z',
  },
  {
    id: 32,
    name: 'Natacion342',
    date: '2021-06-08',
    amount: 150,
    category: {
      id: 4,
      value: 'groceries',
      label: 'Groceries',
      published_at: '2021-06-05T09:57:08.882Z',
      created_at: '2021-06-05T09:57:07.601Z',
      updated_at: '2021-06-05T09:57:08.899Z',
    },
    type: {
      id: 1,
      value: 'expense',
      label: 'Expense',
      published_at: '2021-06-05T09:43:57.107Z',
      created_at: '2021-06-05T09:43:39.281Z',
      updated_at: '2021-06-05T09:43:57.124Z',
    },
    published_at: '2021-06-12T09:46:11.173Z',
    created_at: '2021-06-12T09:46:11.176Z',
    updated_at: '2021-06-12T09:53:22.498Z',
  },
  {
    id: 35,
    name: 'macbook',
    date: '2021-06-08',
    amount: 3333,
    category: {
      id: 1,
      value: 'eating_out',
      label: 'Eating out',
      published_at: '2021-06-05T09:44:19.700Z',
      created_at: '2021-06-05T09:42:06.490Z',
      updated_at: '2021-06-08T14:43:53.617Z',
    },
    type: {
      id: 1,
      value: 'expense',
      label: 'Expense',
      published_at: '2021-06-05T09:43:57.107Z',
      created_at: '2021-06-05T09:43:39.281Z',
      updated_at: '2021-06-05T09:43:57.124Z',
    },
    published_at: '2021-06-15T15:02:29.100Z',
    created_at: '2021-06-15T15:02:29.113Z',
    updated_at: '2021-06-15T15:02:29.132Z',
  },
  {
    id: 38,
    name: 'Natacion',
    date: '2021-06-08',
    amount: 333,
    category: {
      id: 1,
      value: 'eating_out',
      label: 'Eating out',
      published_at: '2021-06-05T09:44:19.700Z',
      created_at: '2021-06-05T09:42:06.490Z',
      updated_at: '2021-06-08T14:43:53.617Z',
    },
    type: {
      id: 2,
      value: 'income',
      label: 'Income',
      published_at: '2021-06-05T09:43:53.732Z',
      created_at: '2021-06-05T09:43:52.470Z',
      updated_at: '2021-06-05T09:43:53.747Z',
    },
    published_at: '2021-06-15T15:35:35.637Z',
    created_at: '2021-06-15T15:35:35.640Z',
    updated_at: '2021-06-15T15:35:35.651Z',
  },
  {
    id: 43,
    name: '3423',
    date: '2020-05-22',
    amount: 342,
    category: {
      id: 1,
      value: 'eating_out',
      label: 'Eating out',
      published_at: '2021-06-05T09:44:19.700Z',
      created_at: '2021-06-05T09:42:06.490Z',
      updated_at: '2021-06-08T14:43:53.617Z',
    },
    type: {
      id: 2,
      value: 'income',
      label: 'Income',
      published_at: '2021-06-05T09:43:53.732Z',
      created_at: '2021-06-05T09:43:52.470Z',
      updated_at: '2021-06-05T09:43:53.747Z',
    },
    published_at: '2021-06-15T15:47:18.206Z',
    created_at: '2021-06-15T15:47:18.210Z',
    updated_at: '2021-06-15T15:47:18.218Z',
  },
  {
    id: 46,
    name: 'sdfas',
    date: '2020-11-08',
    amount: 3432,
    category: {
      id: 1,
      value: 'eating_out',
      label: 'Eating out',
      published_at: '2021-06-05T09:44:19.700Z',
      created_at: '2021-06-05T09:42:06.490Z',
      updated_at: '2021-06-08T14:43:53.617Z',
    },
    type: {
      id: 2,
      value: 'income',
      label: 'Income',
      published_at: '2021-06-05T09:43:53.732Z',
      created_at: '2021-06-05T09:43:52.470Z',
      updated_at: '2021-06-05T09:43:53.747Z',
    },
    published_at: '2021-06-15T15:52:11.889Z',
    created_at: '2021-06-15T15:52:11.894Z',
    updated_at: '2021-06-15T15:52:11.905Z',
  },
  {
    id: 47,
    name: 'pr ',
    date: '2020-11-08',
    amount: 3450,
    category: {
      id: 3,
      value: 'electronics',
      label: 'Electronics',
      published_at: '2021-06-05T09:56:55.650Z',
      created_at: '2021-06-05T09:56:53.573Z',
      updated_at: '2021-06-05T09:56:55.666Z',
    },
    type: {
      id: 1,
      value: 'expense',
      label: 'Expense',
      published_at: '2021-06-05T09:43:57.107Z',
      created_at: '2021-06-05T09:43:39.281Z',
      updated_at: '2021-06-05T09:43:57.124Z',
    },
    published_at: '2021-06-15T16:41:35.064Z',
    created_at: '2021-06-15T16:41:35.102Z',
    updated_at: '2021-06-15T16:41:35.166Z',
  },
  {
    id: 48,
    name: 'Natacion',
    date: '2021-06-08',
    amount: 333,
    category: {
      id: 1,
      value: 'eating_out',
      label: 'Eating out',
      published_at: '2021-06-05T09:44:19.700Z',
      created_at: '2021-06-05T09:42:06.490Z',
      updated_at: '2021-06-08T14:43:53.617Z',
    },
    type: {
      id: 2,
      value: 'income',
      label: 'Income',
      published_at: '2021-06-05T09:43:53.732Z',
      created_at: '2021-06-05T09:43:52.470Z',
      updated_at: '2021-06-05T09:43:53.747Z',
    },
    published_at: '2021-07-08T14:38:12.487Z',
    created_at: '2021-07-08T14:38:12.498Z',
    updated_at: '2021-07-08T14:38:12.535Z',
  },
]

data.forEach(transaction => {
  db.get('transactions')
    .insert({
      name: transaction.name,
      date: transaction.date,
      amount: transaction.amount,
      category: transaction.category.value,
      type: transaction.type.value,
      created_at: new Date(),
      updated_at: new Date(),
    })
    .write()
  console.log(`${transaction.name} Transaction created`)
})
