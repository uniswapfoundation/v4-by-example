import React, { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import SEO from "../components/SEO"
import SearchBar from "../components/SearchBar"
import useDebounce from "../hooks/useDebounce"
import { search, unique } from "../lib/search"
import styles from "./index.module.css"
import youTube from "../components/youtube.png"
import { ROUTES, ROUTES_BY_CATEGORY, TRANSLATIONS } from "../nav"

const UPDATES = ["2024/03/15 - Update for breaking changes", "2024/02/01 - Swap Fee", "2024/01/31 - msg.sender", "2024/01/23 - Dynamic Fees", "2024/01/08 - Quoter", "2023/12/15 - Update v4", "2023/12/11 - Custom Curves", "2023/12/03 - Static Hook Fee", "2023/11/28 - Updated pool initialization", "2023/11/28 - NoOp", "2023/11/13 - Make snippets concise", "2023/10/18 - Initial V4 Snippets"]

export default function HomePage() {
  const [query, setQuery] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchResults, setSearchResults] = useState<{
    [key: string]: boolean
  } | null>(null)

  useEffect(() => {
    const q = searchParams.get("q")
    if (q != null && q.length > 0) {
      setQuery(q)
      _search(q, false)
    }
  }, [])

  function _search(query: string, save: boolean) {
    const q = query.trim()

    if (q.length == 0) {
      setSearchResults(null)
      if (save) {
        setSearchParams({ q: "" })
      }
      return
    }

    const words = unique(q.split(" "))
    const pages: { [key: string]: boolean } = {}

    for (const word of words) {
      const res = search(word)
      for (const page of res) {
        pages[page] = true
      }
    }

    setSearchResults(pages)
    if (save) {
      setSearchParams({ q })
    }
  }

  const _searchWithDelay = useDebounce((query: string) => _search(query, true), 500, [])

  function onChangeSearchQuery(query: string) {
    setQuery(query)
    _searchWithDelay(query)
  }

  function renderLinks() {
    if (searchResults) {
      if (Object.keys(searchResults).length == 0) {
        return <div>No results</div>
      }

      return (
        <ul className={styles.list}>
          {ROUTES.filter(({ path }) => searchResults[path]).map(({ path, title }) => (
            <li className={styles.listItem} key={path}>
              <a href={path}>{title}</a>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <>
        {ROUTES_BY_CATEGORY.map(({ routes, title }, i) => (
          <div key={i}>
            {title && <h3 className={styles.category}>{title}</h3>}

            <ul className={styles.list}>
              {routes.map(({ path, title }) => (
                <li className={styles.listItem} key={path}>
                  <a href={path}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* <div>
          <h3 className={styles.category}>Translations</h3>
          {TRANSLATIONS.map(({ lang, url }) => (
            <li className={styles.listItem} key={url}>
              <a href={url} target="__blank">
                {lang}
              </a>
            </li>
          ))}
        </div> */}
      </>
    )
  }

  return (
    <div className={styles.component}>
      <SEO
        title="Uniswap v4 by Example | 0.8.22"
        description="Learn Uniswap v4 using Solidity"
      />
      <h1 className={styles.header}>
        <a href="/">Uniswap v4 by Example</a>
      </h1>
      <div className={styles.subHeader}>v0.8.22</div>
      <div className={styles.main}>
        <p>
          An introduction to integrating and using{" "}
          <a href="https://github.com/uniswap/v4-core">Uniswap v4</a> through simple
          examples
        </p>

        <div className={styles.updates}>
          {UPDATES.map((text, i) => (
            <div key={i}>{text}</div>
          ))}
        </div>

        <div className={styles.search}>
          <SearchBar value={query} onChange={onChangeSearchQuery} />
        </div>

        {renderLinks()}
      </div>
    </div>
  )
}
