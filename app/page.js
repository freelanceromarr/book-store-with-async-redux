'use client'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Filter from './components/Filter/Filter'
import AddProduct from './components/Products/AddProduct'
import ProductListing from './components/Products/ProductListing'

export default function Home() {

  return (
    <>
      <Navbar key={1}/>
      <main className="py-12 2xl:px-6">
    <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
            <div className="flex items-center justify-between mb-12">
                <h4 className="mt-2 text-xl font-bold">Book List</h4>

                <Filter  key={2}/>
            </div>
             <ProductListing  key={3}/>
        </div>
        <AddProduct  key={4}/>
    </div>
</main>
    </>
  )
}
