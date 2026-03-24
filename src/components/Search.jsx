import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import profile2 from '../images/profile2.jpeg'

const Search = () => {
  return (
    <section className='grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-violet-50 to-slate-100 rounded-2xl p-8 lg:p-12'>
      <div>
        <p className='uppercase tracking-widest text-xs text-violet-600 font-semibold'>Developer Community</p>
        <h1 className='text-4xl font-extrabold mt-3 leading-tight'>
          Discover practical tutorials and engineering stories.
        </h1>
        <p className='text-slate-600 mt-4'>
          Learn frontend, backend, and product craftsmanship from a growing community of builders.
        </p>

        <div className='mt-6 flex items-center bg-white border border-slate-200 rounded-xl px-4 py-3 max-w-xl'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-slate-400 mr-3' />
          <input type='text' placeholder='Search articles, tags, topics...' className='w-full outline-none text-slate-700' />
        </div>
      </div>

      <img src={profile2} alt='Developers working together' className='w-full h-80 object-cover rounded-2xl shadow-xl' />
    </section>
  )
}

export default Search
