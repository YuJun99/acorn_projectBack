import React, { Component, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';

class MemberCalendar extends Component {

    state = {};
    /*
        axios의 get 메소드를 통해 Back-End의 /url에 정보를 
        요청하고, 그에 따른 res.data 응답을 리턴합니다.
    */
        axiosEvents = () => {
            return axios.get('/membercalendar')
              .then(res => res.data)
              .catch(error=>console.log(error))
          }

    /*
        모든 과정은 componentDidMount에 의해, 컴포넌트가 
        만들어지고 첫 렌더링을 모두 끝낸 후 실행됩니다.
    */
    componentDidMount() {
        this.getEvents();
    }
    /*
        axiosEvents이 응답을 받을 때 까지 기다리고, 응답을 받는다면 
        setState 메소드를 호출하여 state 값에 events라는 
        데이터를 넣어줍니다.
    */
    getEvents = async () => {
        const events = await this.axiosEvents();
        this.setState({
            events
        })
    } 
    
    /*
      FullCalendar 컴포넌트를 출력합니다.
    */
    render() {
        return (
          <div className="App"> 
                <FullCalendar 
                    defaultView="dayGridMonth" 
                    plugins={[ dayGridPlugin ]}
                    events={[
                        { 
                            title: this.setState.getEvents,
                            date: '2024-09-02'
                        }
                    ]}
                />
          </div>
        );
    }
}

export default MemberCalendar;