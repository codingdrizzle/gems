import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Card, Skeleton } from 'antd'

const Preview = ({ complaint }) => {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
    setData({ ...complaint })
  }, [])

  const {category, content, date, descLocation, geoLocation, image, resolved, type, user: complainant } = data;
  return (
    <>
      {
        loading ? <Skeleton active title={'Gekki'} /> :
          <Card>
            <p>{category}</p>
            <p>{content}</p>
            <p>{date}</p>
            <p>{descLocation}</p>
            <p>{geoLocation.city}</p>
            <p>{image}</p>
            <p>{resolved}</p>
            <p>{type}</p>
            <p>{complainant.firstname}</p>
            {/* <Image src={image} alt={'Complaint image'} blurDataURL={"blur"} layout={'fill'}/> */}
          </Card>
      }
    </>
  )
}

export default Preview