import Link from 'next/link'
import React from 'react'
import { CustomForm } from '../../components/forms'

const page = () => {
  return (
    <div>
      Hello world
      <CustomForm />
      <nav>
        <ul>
          <li>
            <Link href="say-hello/1">
              Greatings 1
            </Link>
          </li>
          <li>
            <Link
              href="say-hello/2">
              Greatings 2
            </Link>
          </li>
          <li>
            <Link
              href="say-hello/3">
              Greatings 3
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default page