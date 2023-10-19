"use client"

import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"
import Image from "next/image";

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pb-2">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <Link href="/" className="text-xl-semi uppercase">
          <Image
              src="/logo_trans.png"
              loading="eager"
              alt="Logo by Studio Stumpel"
              priority={true}
              width={300}
              height={54}
              sizes="(max-height: 50px)"
              style={{objectFit: "contain"}}
          />
        </Link>
        <div className="text-small-regular grid grid-cols-3 pt-16 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <a href="https://www.instagram.com/latex_fantasies/">
            <Image
                src="/insta-icon.webp"
                alt={"Instagram Icon"}
                width={50}
                height={50}
            ></Image>
            </a>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Collections</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  <Link href={`/collections/${c.handle}`}>{c.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Limit Latex</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a
                  href="/about-us/"
                  target="_blank"
                  rel="noreferrer"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2023 LimitLatex
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
  )
}

export default FooterNav
