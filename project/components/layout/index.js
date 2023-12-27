import React, { PureComponent } from 'react'
// import Link from "next/link";

class Layout extends PureComponent {
  render () {
    return (
      <div className='layout'>
        {/* <header>
          <menu>
            <Link href="/about">
              <h3>About</h3>
            </Link>
          </menu>
          <style jsx>{`
            header {
              display: flex;
              align-items: center;
              font-family: Monospace;
              margin: 10px 20px;
            }
            h3 {
              margin-left: 10px;
            }
            img {
              width: 30px;
            }
            menu > a {
              margin-right: 16px;
            }
          `}</style>
        </header> */}
        {this.props.children}
      </div>
    )
  }
}

export default Layout
