'use client'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Filter from './components/Filter/Filter'
import AddProduct from './components/Products/AddProduct'
import ProductListing from './components/Products/ProductListing'

export default function Home() {

  return (
    <>
      <Navbar/>
      <main class="py-12 2xl:px-6">
    <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div class="order-2 xl:-order-1">
            <div class="flex items-center justify-between mb-12">
                <h4 class="mt-2 text-xl font-bold">Book List</h4>

                <Filter/>
            </div>
             <ProductListing/>
        </div>
        <AddProduct/>
    </div>
</main>
    </>
  )
}
