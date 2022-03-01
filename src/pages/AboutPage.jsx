import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'



function AboutPage() {
  return (
    <Card>
        <div className="about">
          <h3>O Aplikcji</h3>
          <p>Aplikacja do wystawiania ocen o produkcie/usługach</p>

          <p>
            <Link to="/">Powrot</Link>
          </p>
        </div>
    </Card>
  )
}

export default AboutPage