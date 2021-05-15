import React from 'react';
import './Menu.css'

export default function MenuPage() {
  return (
    <header className="viewport-header">
      <h1 className="">Menu</h1>
      <section className="menu">
      <section className="hookah group" >
        <h3 className="title">Hookah</h3>
        <p>1 Hookah (2 people max) - $20</p>
        <p>2 Hookahs (4 people max) - $40</p>
        <p>3 Hookahs (6 people max) - $60</p>
        <p>Aditional bowl (after first rental) - $15</p>
        <p>Ask about larger groups</p>
      </section>
      <section className="kava group">
        <h3 className="title">Kava</h3>
        <section className="flavors">
        <section className="subFlavor">
        <h5 className="title">Regular</h5>
          <p>4 oz - $4</p>
          <p>8 oz - $8</p>
          <p>12 oz - $12</p>
        </section>
        <section className="subFlavor">
        <h6 className="title">Fiji</h6>
          <p>4 oz - $5</p>
          <p>8 oz - $9</p>
          <p>12 oz - $13</p>
        </section>
        <section className="subFlavor">
        <h6 className="title">Special</h6>
          <p>4 oz - $6</p>
          <p>8 oz - $10</p>
          <p>12 oz - $14</p>
        </section>
      </section>
        </section>
        <section className="cbd group">
        <h3 className="title">Cbd Soda</h3>
          <p>$3.5</p>
        <h3 className="title">Tea</h3>
          <p>$3.5</p>
        </section>
        <section className="coffee group">
        <h3 className="title">Coffee</h3>
          <p>French Press - $7</p>
            <p>Drip:  12 oz ($2) or 16 oz  ($3)</p>
          <p>Bag - $20</p>
          </section>
          <p></p>
      </section>
      <section>
      </section>
    </header>
  )
}