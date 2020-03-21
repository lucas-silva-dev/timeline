import React, { Component } from 'react'
import axios from 'axios'

import { TimeLineContainer } from '../style/content'
import CardContainer from './card.js'

class timeline extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resp: [],
      data: [],
      dataFormat: [],
      compras: []
    }
  }
  
  UNSAFE_componentWillMount() {
    this.request()
  }

  request = async () => {
    const resp = await axios.get('https://storage.googleapis.com/dito-questions/events.json')
    
    this.setState({ ...this.state, resp: resp.data})

    this.respFormat()
  }

  respFormat = () => {
    let { resp } = this.state
    
    resp.events.map(item => {
      let object = {
        event: item.event,
        date: this.getDate(item.timestamp),
        hour: this.getHour(item.timestamp),
        revenue: item.revenue,
        custom_data: item.custom_data.map(item => {
          let obj = { [item.key]: item.value}

          return obj
        })
      }
      
      return this.state.data.push(object)
    })

    return this.format()
  }

  
  getDate = date => {
    let d = new Date(date)
    let dateFomated = d.toLocaleDateString()
    
    return dateFomated
  }

  getHour = date => {
    let t = new Date(date)
    let timeFormated = t.toLocaleTimeString()
    
    return timeFormated
  }

  format = () => {    
    let { data } = this.state
    let events = []

    data.map(item => {
      let obj = item
      
      item.custom_data.map(item => {
        if(item.store_name !== undefined ) obj.store_name = item.store_name
        if(item.transaction_id !== undefined) obj.transaction_id = item.transaction_id
        if(item.product_price !== undefined ) obj.product_price = item.product_price
        if(item.product_name !== undefined) obj.product_name = item.product_name
        if(obj.revenue === undefined) delete obj.revenue  
        obj.products = []
        return delete obj.custom_data
      })

      return events.push(obj)
    })
    
    this.setState({ ...this.state, dataFormat: events })
    
    return this.agroup() 
  }

  agroup = () => {
    let { dataFormat } = this.state
    let comprou = []
    let comprou_produto = []
    let obj = []

    dataFormat.map(item => {
      if(item.event === 'comprou') { return comprou.push(item) }
      if(item.event === 'comprou-produto') { return comprou_produto.push(item) }
      return false
    })

    comprou.forEach(element => {
      comprou_produto.map(item => {
        if(element.transaction_id === item.transaction_id) {
         return element.products.push({product_name: item.product_name, product_price: item.product_price})
        }

        return false
      })
      return obj.push(element)
    });

    this.setState({ ...this.state, compras: obj })

  }

  render() {
    let  { compras } = this.state

    return (
      <TimeLineContainer>
         {
           compras.map(item => {
            if(item.event === 'comprou') {
              
              return( 
                <CardContainer
                  key={item.transaction_id}
                  date={item.date} 
                  clock={item.hour} 
                  place={item.store_name} 
                  money={item.revenue} 
                  products={item.products}
                />)
             }

             return false
           })
         }
      </TimeLineContainer>
    )
  }
}

export default timeline