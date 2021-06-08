import React from 'react';//특정한 library 불러옴

class Customer extends React.Component {
    render() {
        return (
            <div>
                <h2>홍길동</h2>
                <p>201010</p>
                <p>여자</p>
                <p>직장인</p>
            </div>
        )
    }
}

export default Customer;