import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import Button from '@mui/material/Button'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Edit, DeleteForever } from '@mui/icons-material'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import SearchIcon from '@mui/icons-material/Search'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import { TransactionDrawer } from '../Drawer'
import { TrackexContext } from '../../contexts/trackexContext'

import { transactionsAPI } from '../../services/transactions'
const Table = styled.table`
  width: 100%;
  text-align: left;
  padding: 64px;
`

const HeadCell = styled.td`
  padding: 16px 0;
  width: 20%;
`

const TableCell = styled.td`
  padding: 8px 0;
  width: 20%;
`
const AmountCell = styled.td`
  color: ${props => {
    return props.type === 'expense' ? '#FF7661' : '#00E4C6'
  }};
`
const ActionsCell = styled.td`
  display: flex;
  column-gap: 16px;
`

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 16px;
`

const ContentContainer = styled.div`
  display: flex;
`
const FiltersContainer = styled.div`
  padding-top: 64px;
`

const FilterItem = styled.div`
  background-color: #252f3d;
  padding: 2px 8px;
  :last-of-type {
    margin-top: 16px;
  }
`
const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
`
const TransactionsList = () => {
  const [transactions, setTransactions] = useState([])
  const [filteredTransactions, setFilteredTransactions] = useState([])
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const [search, setSearch] = useState('')
  const [mode, setMode] = useState('add')
  const [selectedTransaction, setSelectedTransaction] = useState(null)
  const { categories, types } = useContext(TrackexContext)

  const [categoriesFilter, setCategoriesFilter] = useState(
    Object.keys(categories).reduce((acc, category) => {
      acc[category] = false
      return acc
    }, {})
  )

  const [typesFilter, setTypesFilter] = useState(
    Object.keys(types).reduce((acc, type) => {
      acc[type] = false
      return acc
    }, {})
  )

  /*
    {
      eating_out: 'Eating Out',
      salary: 'Salary'
    }
   */
  // const initCategories = () => {
  //   /*
  //   {
  //     eating_out: true,
  //     salary: false
  //   }
  //  */
  //   // const obj = {}
  //   // Object.keys(categories).forEach(category => {
  //   //   obj[category] = false
  //   // })
  //   Object.keys(categories).reduce((acc, category) => {
  //     console.log(acc)
  //     acc[category] = false
  //     return acc
  //   }, {})
  // }

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const { data, status } = await transactionsAPI.all()
        if (status === 200) {
          setTransactions(data)
        }
      } catch (e) {
        console.log(e)
      }
    }
    getTransactions()

    // transactionsAPI
    //   .all()
    //   .then(({ data, status }) => {
    //     if (status === 200) {
    //       setTransactions(data)
    //     }
    //   })
    //   .catch(error => console.error(error))
  }, [])

  useEffect(() => {
    setFilteredTransactions(transactions)
  }, [transactions])

  const filterByName = () => {
    const filteredTransactions = transactions.filter(transaction =>
      transaction.name.toLowerCase().includes(search)
    )
    setFilteredTransactions(filteredTransactions)

    console.log('filteredTransactions', filteredTransactions)
  }
  useEffect(() => {
    filterByName()
  }, [search])

  const filterByCategory = () => {
    console.log('filterByCategory')

    const checked = Object.keys(categoriesFilter).filter(
      category => categoriesFilter[category]
    )

    if (checked.length === 0) {
      setFilteredTransactions(transactions)
    } else {
      const filteredTransactions = transactions.filter(
        transaction => categoriesFilter[transaction.category]
      )
      setFilteredTransactions(filteredTransactions)
    }
  }
  useEffect(() => {
    filterByCategory()
  }, [categoriesFilter])

  const filterByType = () => {
    const checked = Object.keys(typesFilter).filter(type => typesFilter[type])
    console.log('checked', checked)
    if (checked.length === 0) {
      setFilteredTransactions(transactions)
    } else {
      const filteredTransactions = transactions.filter(
        transaction => typesFilter[transaction.type]
      )
      setFilteredTransactions(filteredTransactions)
    }
  }
  useEffect(() => {
    console.log('typesFilter', typesFilter)
    filterByType()
  }, [typesFilter])

  const saveTransaction = async values => {
    let newTransaction = {
      //all information
      name: values.name,
      date: values.date,
      amount: values.amount,
      category: values.category,
      type: values.type,
    }
    try {
      const { status, data } = await transactionsAPI.create(newTransaction)

      if (status === 201) {
        setTransactions([...transactions, data])
      }
    } catch (e) {
      console.error(e)
    }
  }
  const onCloseDrawer = () => setIsOpenDrawer(false)

  const handleEdit = id => {
    console.log('Edit transaction')
    // get data from the selected Transaction
    console.log('transaction id', id)
    // open the drawer
    setMode('edit')
    setIsOpenDrawer(true)
    // Fill the form with the selected transaction data
    const selectedTransaction = transactions.find(
      transaction => transaction.id === id
    )
    setSelectedTransaction(selectedTransaction)
  }

  const editTransaction = async values => {
    console.log('editTransaction', values)
    try {
      const { status, data } = await transactionsAPI.update(values)
      console.log('data from BE', data)
      if (status === 200) {
        //1. Find the transaction index to edit in the transactions array
        const transactionIndex = transactions.findIndex(
          transaction => transaction.id === data.id
        )
        // 2. We make a copy of our state
        const _transactions = [...transactions]

        // 3. Replace the transaction that we edited
        _transactions[transactionIndex] = data

        //4. Update our state
        setTransactions(_transactions)
        setSelectedTransaction(null)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleDelete = id => {
    //we need to find the transaction that we want to delete
    // we need to open the Dialog
    const selectedTransaction = transactions.find(
      transaction => transaction.id === id
    )
    setSelectedTransaction(selectedTransaction)
    setIsDeleteDialogOpen(true)
  }
  const deleteTransaction = async () => {
    try {
      const response = await transactionsAPI.delete(selectedTransaction.id)
      if (response.status === 200) {
        // filter transactions for all the ones that don't match
        //update state
        const _transactions = transactions.filter(
          transaction => transaction.id !== selectedTransaction.id
        )
        setTransactions(_transactions)
        setIsDeleteDialogOpen(false)
        setSelectedTransaction(null)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleCloseDialog = () => setIsDeleteDialogOpen(false)
  // Dialog -- cancel--> will close the dialog
  // Dialog -- Delete--> will deleteTransaction + close the dialog
  return (
    <main style={{ width: '100%', padding: '32px' }}>
      <ActionsWrapper>
        <FormControl variant='standard' style={{ width: '80%' }}>
          <Input
            onChange={e => {
              setSearch(e.target.value)
            }}
            style={{ color: 'white' }}
            startAdornment={
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          variant='contained'
          onClick={() => {
            setMode('add')
            setIsOpenDrawer(true)
          }}
        >
          + Add transaction
        </Button>
      </ActionsWrapper>
      <ContentContainer>
        <FiltersContainer>
          <h2>Filters</h2>
          <FilterItem>
            <h3>Category</h3>
            <FilterOptions>
              {Object.keys(categories).map(category => {
                return (
                  <FormControlLabel
                    control={<Checkbox />}
                    label={categories[category]}
                    name={category}
                    onChange={e => {
                      const newCategoriesFilterState = {
                        ...categoriesFilter,
                        [category]: e.target.checked,
                      }
                      setCategoriesFilter(newCategoriesFilterState)
                    }}
                  />
                )
              })}
            </FilterOptions>
          </FilterItem>
          <FilterItem>
            <h3>Type</h3>
            <FilterOptions>
              {Object.keys(types).map(type => {
                return (
                  <FormControlLabel
                    control={<Checkbox />}
                    label={types[type]}
                    name={type}
                    onChange={e => {
                      setTypesFilter({
                        ...typesFilter,
                        [type]: e.target.checked,
                      })
                    }}
                  />
                )
              })}
            </FilterOptions>
          </FilterItem>
        </FiltersContainer>

        <Table>
          <thead>
            <tr>
              <HeadCell>Date</HeadCell>
              <HeadCell>Name</HeadCell>
              <HeadCell>Category</HeadCell>
              <HeadCell>Amount</HeadCell>
              <HeadCell>Type</HeadCell>
              <HeadCell></HeadCell>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.name}</TableCell>
                  <TableCell>
                    {/* {
                    categories.find(
                      category => category.value === transaction.category
                    ).label
                  } */}
                    {categories[transaction.category]}
                  </TableCell>
                  <AmountCell type={transaction.type}>
                    {transaction.amount}
                  </AmountCell>
                  <TableCell>{types[transaction.type]}</TableCell>
                  <ActionsCell>
                    <Edit
                      onClick={() => {
                        handleEdit(transaction.id)
                      }}
                    />
                    <DeleteForever
                      style={{ color: '#FF7661' }}
                      onClick={() => {
                        handleDelete(transaction.id)
                      }}
                    />
                  </ActionsCell>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <TransactionDrawer
          saveTransaction={saveTransaction}
          isOpen={isOpenDrawer}
          onClose={onCloseDrawer}
          mode={mode}
          selectedTransaction={selectedTransaction}
          editTransaction={editTransaction}
        />
        <Dialog open={isDeleteDialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>
            Are you sure you want to delete this transaction?
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              If you delete it you won't be able to recover it.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={deleteTransaction}>Delete</Button>
          </DialogActions>
        </Dialog>
      </ContentContainer>
    </main>
  )
}

export { TransactionsList }
