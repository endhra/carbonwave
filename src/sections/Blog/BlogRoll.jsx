import React from "react"
import { Link } from "gatsby"
import { withStyles } from "tss-react/mui"
import AnimateIn from "components/AnimateIn/AnimateIn.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx";
// icons
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx";

class BlogRoll extends React.Component {
  render() {
    const {
      classes,
      recentPosts,
      showImage,
      showPagination
    } = this.props
    const { currentPage, numPages, langKey } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const columnSize = 12 / this.props.columns
    let slug = langKey === 'en' ? '/blog' : '/es/blog'
    const prevPage = currentPage - 1 === 1 ? slug : slug + '/' + (currentPage - 1).toString()
    const nextPage = slug + '/' + (currentPage + 1).toString()
    return (
      <>
        {recentPosts.map(({ node: post }) => (
          <GridItem
            xs={12}
            sm={12}
            md={columnSize !== 12 ? 6 : columnSize}
            lg={columnSize}
            key={post.id}
            className = {classes.marginBottom50}
          >
            <AnimateIn type="slide">
              {showImage ? 
                <Link to={post.fields.slug}>
                  <div className={`${classes.bgImage} ${classes.marginBottom30}`} style={{ backgroundImage: `url("${post.frontmatter.image}")`, height: "330px" }}></div>
                </Link>
                : 
                <div className={`${classes.divider} ${classes.marginTop30} ${classes.paddingTop30}`}></div>}
              <Link
                to={post.fields.slug}>
                <h4>{post.frontmatter.title}</h4>
              </Link>
              <span className={classes.secondaryText}>{post.frontmatter.date}</span>
              <p className={classes.minHeight150}>{post.excerpt}</p>
            </AnimateIn>
          </GridItem>
        ))}
        {showPagination ? 
          <GridItem xs={12} sm={12} md={12} className={classes.marginBottom20}>
            <ul className={classes.inlineList}>
              {!isFirst && (
                <li
                  key={0}
                  className={classes.inlineListItem}
                >
                  <Link to={prevPage}>
                    <Button size="lg" color="primary">
                      <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
                    </Button>
                  </Link>
                </li>
              )}
              {Array.from({ length: numPages }, (_, i) => (
                <li
                  key={`pagination-number${i + 1}`}
                  className={classes.inlineListItem}
                >
                  <Link to={slug + `/${i === 0 ? '' : i + 1}`}>
                    <h4 style={{borderBottom: i + 1 === currentPage ? '3px solid #000' : ''}}>{i + 1}</h4>
                  </Link>
                </li>
              ))}
              {!isLast && (
                <li
                  key={numPages + 1}
                  className={classes.inlineListItem}
                  >
                  <Link to={nextPage}>
                    <Button size="lg" color="primary">
                      <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                    </Button>
                  </Link>
                </li>
              )}
            </ul>
          </GridItem> 
        : null}
      </>
    )
  }
}

export default withStyles(BlogRoll, generalViewStyle)