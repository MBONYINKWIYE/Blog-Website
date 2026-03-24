import Search from './Search'
import AllPost from './AllPost'

function Home() {
  return (
    <>
      <Search />
      <section className='mt-12'>
        <div className='flex items-end justify-between mb-5'>
          <h2 className='text-2xl font-bold'>Latest Articles</h2>
          <p className='text-sm text-slate-500'>Fresh insights from our authors</p>
        </div>
        <AllPost />
      </section>
    </>
  )
}

export default Home
