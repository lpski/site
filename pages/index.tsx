import Head from '../components/head/head'

export default function Home() {
  return (
    <div className="container">
      <Head title="Luke Porupski" />

      <main>
        {/* It's under construction, ok? */}
        {/* <h1 className="title">LP</h1> */}
        <img className="mySpecialBrand" draggable="false" src="/logos/scribble_circle.png"/>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #000;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .mySpecialBrand {
          height: 200px;
          user-select: none;
          click-events: none;
          box-shadow: 0 0 1px 0px white inset, 0 0 1px 0px white;
          border-radius: 50%;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
