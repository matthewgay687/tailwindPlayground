import './App.css';

export default function App() {
  return (
    <div className='bg-gray-800 text-white p-2'>
      <h1 className="text-3xl font-bold">
        TailwindCSS Playground!
      </h1>

      <div className='p-4 m-2 w-1/2'>
        <p>
          Welcome in! Enjoy this showcase of a bunch of different html with tailwindcss styling
        </p>
      </div>

      <hr />

      <div className='p-4 m-2 w-1/2'>
        <p className='text-lg font-bold italic text-center'>
          Here is an example of some fun text with some different typography.
        </p>
        <div className='p-4 m-2 border rounded shadow-lg opacity-50 overflow-x-scroll cursor-pointer'>
          This is a div with some fun borders, shadows and other visual effects like a cursor pointer for a mouse and an overflow-x-scroll.
        </div>
      </div>

      <hr />

      <div className='p-4 m-2'>
        <div class="container mx-auto px-4 m-2 border">
          This is a container div where the size automatically adjusts to the screen size. 
        </div>
        <div class="container max-w-screen-xl mx-auto px-4 m-2 border">
          Here is another one but it prevents the container from getting too wide.
        </div>
      </div>

      <hr />

      <div className='p-4 m-2 w-1/2'>
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

      <div className='p-4 m-2 w-1/2'>
        <p>
          Next is a multi-column layout:
        </p>
      </div>
      <div className='grid grid-cols-3 gap-4 p-4 m-2'>
        <div className='border'>column1</div>
        <div className='border'>column2</div>
        <div className='border'>column3</div>
      </div>

      <hr />

    </div>
  )
}
