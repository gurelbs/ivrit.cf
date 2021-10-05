import React, { useState, useEffect } from 'react'
import axios from 'axios'
const services = [
	{
		name: 'quickAnswer',
		heName: 'תשובה מהירה',
		description: 'תשובה מהירה לשאלות ידע',
		url: '',
    result: []
	},
	{
		name: 'lyrics',
		heName: 'מילים לשירים',
		description: 'מילים לשירים בעברית ובלועזית',
		url: '',
    result: []
	},
	{
		name: 'news',
		heName: 'חדשות',
		description: 'חדשות אחרונות לפי מילות מפתח',
		url: '',
    result: []
	},
]
export default function Playground() {
	const [q, setQ] = useState('')
	const [servicesInfo, setServicesInfo] = useState(services)
	const [currentService, setCurrentService] = useState(servicesInfo[0].name)
  const [result, setResult] = useState(null)
	const url = process.env.NODE_ENV !== 'production' ? 'http://localhost:4000' : 'https://ivrit.herokuapp.com'

	async function quickAnswer(e) {
    e.preventDefault()
    setQ('')
    setServicesInfo(services => services.map(service => ({ ...service, result: [] })))
		const service = servicesInfo.find(service => service.name === currentService)
    const {data} = await axios.get(service.url)
    setServicesInfo(services => services.map(info => info.name === service.name 
      ? { ...service, result: data } 
      : info))
    return renderAnswersByService(service)
	}
  
  useEffect(() => {
    if (currentService) {
      setServicesInfo(info =>
        info.map(service => ({
          ...service,
          url: `${url}/api/${service.name}?q=${q}`,
        }))
      )
    }
  }, [currentService,url,q])

  useEffect(() => {
    console.log(servicesInfo);
  },[servicesInfo])
  
  useEffect(() => {
    console.log(result);
  },[result])

  function renderAnswersByService(service) {
    if (service.name === 'news'){
      setResult(service.result.map((news, i) => <div key={i}>
      <a href={news.link}>
      <div>
        <h3>{news.header}</h3>
        <p>
        <code>{news.origin}</code>
        *
        <small>{news.time}</small>
        </p>
      </div>
      </a>
    </div>
  ))}
    if (service.name === 'lyrics'){
      setResult(service.result.map((lyrics, i) => <div key={i}>
          <div>
            <h3>{lyrics.singer}</h3>
            <p>{lyrics.songName}</p>
            <p>{lyrics.lyric}</p>
          </div>
        </div>
      ))
    }
    if (service.name === 'quickAnswer'){
      setResult(service.result.map((quickAnswer, i) => {
        if (typeof quickAnswer === 'string') {
          return <p key={i}>{quickAnswer}</p>
        } else {
          return <ul key={i}>
            {Object.values(quickAnswer).map((answer, i) => <li key={i}>{answer}</li>)}
          </ul>
        }
      }))
    }
  }
	return (
		<div>
			<div>
				<label htmlFor='services'>בחירת סוג שירות:</label>
				<select
          onChange={e => setCurrentService(e.target.value)}
          name='services' 
          id='services'>
					{servicesInfo?.map((service, i) => (
						<option key={i} value={service.name}>
							{service.heName}
						</option>
					))}
				</select>
			</div>
			<div>
				<textarea
					value={q}
					onChange={e => setQ(e.target.value)}
					cols='100'
					rows='2'
					placeholder={
						currentService
							? servicesInfo.find(service => service.name === currentService).description
							: 'הזנת שאלה'
					}
				/>
			</div>
			<button type='submit' onClick={quickAnswer} disabled={currentService !== 'news' && q.length < 1}>
				קבלת תשובה בעברית
			</button>
      {result ? <div>{result}</div> : null}
		</div>
	)
}
