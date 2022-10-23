import { useCollections } from "medusa-react"
import Link from "next/link"
import Image from "next/image"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { NextPageWithLayout } from "types/global"

const Recipes: NextPageWithLayout = () => {
  const { collections } = useCollections()

  return (
    <>
      <Head title="Store" description="Explore all of our products." />
      <div className="flex flex-col text-center py-6">
        <div className="flex flex-col">
          <h2 className="text-2xl-regular text-gray-900 mb-2">Recipes</h2>
          <p className="text-lg max-w-lg mx-auto mb-8">
            Don't know what to cook? Don't worry, we can help you. Check out the
            best recipes from our staff
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-y-2 gap-x-4">
          {collections?.map((c) => (
            <li key={c.id} className="w-auto">
              <Link
                className=" max-w-sm w-full lg:max-w-full lg:flex"
                href={`/recipes/${c.id}`}
              >
                <div className="cursor-pointer w-1/3 mx-auto pt-4 border-2 rounded-sm border-solid border-teal-400">
                    <Image
                        src={
                        c.metadata?.image
                            ? `/recipes/${c.metadata?.image}.jpg`
                            : "/hero.jpg"
                        }
                        alt={`${c.title} recipe img`}
                        width={120}
                        height={120}
                        objectFit="cover"
                        className="absolute inset-0"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl">{c.title}</div>
                    </div>
                    <div className="px-6 py-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <i className="fa-regular fa-clock mr-2"></i>{c.metadata?.time}
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <i className="fa-solid fa-kitchen-set mr-2"></i>{c.metadata?.difficulty}
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <i className="fa-solid fa-utensils mr-2"></i>{c.metadata?.servings}
                        </span>
                    </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

Recipes.getLayout = (page) => <Layout>{page}</Layout>

export default Recipes
