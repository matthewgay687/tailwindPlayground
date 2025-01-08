import './App.css';

export default function App() {
  return (
    <div className='bg-gray-800 text-white p-2'>
      <h1 className="text-3xl font-bold">
        TailwindCSS Playground!
      </h1>

      <div className='section'>
        <p>
          Welcome in! Enjoy this showcase of a bunch of different html with tailwindcss styling
        </p>
      </div>

      <hr />

      <div className='section'>
        <h2 className='text-xl'>Typography:</h2>
        <p className='text-lg font-bold italic text-center'>
          Here is an example of some fun text with some different typography.
        </p>
        <div className='p-4 m-2 border rounded shadow-lg opacity-50 overflow-x-scroll cursor-pointer'>
          This is a div with some fun borders, shadows and other visual effects like a cursor pointer for a mouse and an overflow-x-scroll.
        </div>
      </div>

      <hr />

      <div className='p-4 m-2'>
        <h2 className='text-xl'>Containers:</h2>
        <div class="container mx-auto px-4 m-2 border">
          This is a container div where the size automatically adjusts to the screen size. 
        </div>
        <div class="container max-w-screen-xl mx-auto px-4 m-2 border">
          Here is another one but it prevents the container from getting too wide.
        </div>
      </div>

      <hr />

      <div className='section'>
        <h2 className='text-xl'>Navigation/Flexbox:</h2>
        <p>
          Next is an example of a navbar using flex built with tailwind:
        </p>
      </div>
      <nav class="flex items-center justify-between p-4">
        <div>Nav 1</div>
        <div>Nav 2</div>
        <div>Nav 3</div>
        <div>Nav 4</div>
        <div>Nav 5</div>
      </nav>

      <hr />

      <div className='section'>
        <h2 className='text-xl'>Columns:</h2>
        <p>
          Next is a multi-column layout with borders so you can see them:
        </p>
      </div>
      <div className='grid grid-cols-3 gap-4 p-4 m-2'>
        <div className='border'>column1</div>
        <div className='border'>column2</div>
        <div className='border'>column3</div>
      </div>

      <hr />

      <div className='section'>
        <h2 className='text-xl'>Forms:</h2>
        <form className='flex flex-col'>
          <div className='step-1 py-2'>
            <label class="font-bold mb-2">Name</label>
            <input class="border p-2 w-full" />
          </div>
          <div className='step-2 py-2'>
            <button class="bg-blue-500 text-white p-2">Submit</button>
          </div>
        </form>
      </div>

      <hr />

      <div className='p-4 m-2'>
        <h2 className='text-xl'>Data Tables:</h2>
        <table class="border-collapse table-auto w-full text-sm my-2">
          <thead>
            <tr>
              <th class="border p-4">Col 1</th>
              <th class="border p-4">Col 2</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-grey-lighter">
              <td class="border p-4">Data 1</td> 
              <td class="border p-4">Data 2</td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="border p-4">Data 3</td> 
              <td class="border p-4">Data 4</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <div className='section'>
        <h2 className='text-xl'>Cards:</h2>
        <div class="p-4 rounded shadow max-w-md border my-2">
          <h3 class="font-bold text-xl mb-2">
            Card Title
          </h3>  
          Card content
          <button class="bg-blue-500 text-white p-2 block mt-4">
            Call to action
          </button>
        </div>
      </div>

      <hr />

    </div>
  )
}
