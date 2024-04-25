import { Button, Input, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import Search from '../../components/molecules/m-search-input/searchTable'
import TableComponent from '../../components/organisms/o-table/OTable'
// import MFormButton from '../../components/molecules/m-button-icon/MFormButton'
import OForm from '../../components/organisms/o-formbutton/OForm'
import OInput from '../../components/organisms/o-input/OInput'
import DropdownEXP from '../../components/organisms/o-input-dropdown/ODropdown'
function App() {
  const [columns1, setColumns] = useState([])
  const [dataSource, setDataSource] = useState([])
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(result => {
        const list = result.products || []
        const firstObject = list[0] || {}
        const cols = []
        for (const key in firstObject) {
          const col = {
            title: key,
            dataIndex: key,
            filterDropdown: props => <Search {...props} />,
            filterIcon: () => {
              return <SearchOutlined />
            },
            sorter: (a, b) => a[key] - b[key],
            onFilter: (value, record) => {
              return String(record[key]).toLowerCase().includes(value.toLowerCase())
            }
          }
          cols.push(col)
        }
        setColumns(cols)
        setDataSource(list)
      })
  }, [])

  const [data, setData] = useState([
    {
      name: 'John',
      age: 32,
      address: 'New York'
    },
    {
      name: 'Jim',
      age: 33,
      address: 'Sydney'
    },
    {
      name: 'D David',
      age: 40,
      address: 'Japan'
    },
    {
      name: 'James',
      age: 32,
      address: 'New York'
    },
    {
      name: 'Sam',
      age: 40,
      address: 'Sydney'
    },
    {
      name: 'John',
      age: 32,
      address: 'New York'
    },
    {
      name: 'Jim',
      age: 33,
      address: 'Sydney'
    },
    {
      name: 'David',
      age: 40,
      address: 'Japan'
    },
    {
      name: 'James',
      age: 32,
      address: 'New York'
    },
    {
      name: 'Sam',
      age: 40,
      address: 'Sydney'
    }
  ])
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      filterDropdown: props => <Search {...props} />,
      filterIcon: () => {
        return <SearchOutlined />
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Age',
      dataIndex: 'age',
      filterDropdown: props => <Search {...props} />,
      filterIcon: () => {
        return <SearchOutlined />
      },
      sorter: (a, b) => a.age - b.age,

      onFilter: (value, record) => {
        return record.age == value
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filterDropdown: props => <Search {...props} />,
      filterIcon: () => {
        return <SearchOutlined />
      },
      onFilter: (value, record) => {
        return record.address.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Graduated?',
      key: 'key',
      render: payload => {
        return <p>{payload.age > 35 ? 'True' : 'False'}</p>
      }
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="logout"
          onClick={logout}
        >
          Log out
        </button>

        <TableComponent
          dataSource={dataSource}
          columns={columns1}
          scroll={{y: 300}}
          total={50}
          defaultCurrent={1}
          defaultCurrentSize={10}
        />
        <TableComponent
          columns={columns}
          dataSource={data}
          scroll={{y: 300}}
          total={20}
          defaultCurrent={1}
          defaultCurrentSize={1}
        />
      </header>
      <OForm/>
      <OInput/>
      <DropdownEXP />
    </div>
  )
}

export default App
