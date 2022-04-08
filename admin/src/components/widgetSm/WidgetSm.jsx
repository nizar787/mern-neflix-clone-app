import './widgetSm.css'
import { Visibility } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('/users?new=true', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjg3NDQ1MDIwZjUyOWU4NWIwMTU2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTI2MjEzNiwiZXhwIjoxNjQ5Njk0MTM2fQ.Bl1JpnlR0F5f1yItzD0q8T27yqmSPwdHKo8nqJ9X4fA',
          },
        })
        setNewUsers(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getNewUsers()
  }, [])

  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        {newUsers.map((user) => (
          <li className='widgetSmListItem'>
            <img
              src={
                user.profilePic ||
                'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'
              }
              alt=''
              className='widgetSmImg'
            />
            <div className='widgetSmUser'>
              <span className='widgetSmUsername'>{user.username}</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
