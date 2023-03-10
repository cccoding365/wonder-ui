import React from 'react'
import './style.scss'
import classNames from 'classnames'
import { Empty } from ".."
import { TableProps } from './props'

export default function Table(props: TableProps): JSX.Element {
  const { headStyle, bodyStyle, className, border, columns, dataSource, size } = props
  const tableClass = classNames({
    'wonder_table_inner': true,
    [className || '']: !!className,
  })
  const theadTrClass = classNames({
    'wonder_table_thead_th': true,
    'wonder_table_thead_th_boder': border,
    [`wonder_table_thead_th_size_${size}`]: size,
  })
  const tbodyTrClass = classNames({
    'wonder_table_tbody_td': true,
    'wonder_table_tbody_td_boder': border,
    [`wonder_table_tbody_td_size_${size}`]: size,
  })
  return (
    <div className={tableClass}>
      <table className="wonder_table_content">
        <thead className="wonder_table_thead">
          <tr className="wonder_table_thead_tr">
            {
              columns && columns.length ? columns.map((item: any, index: number) => {
                const thStyle = {
                  ...item.style,
                  ...headStyle,
                  textAlign: item.align ? item.align : '',
                }
                return (
                  <th className={theadTrClass} key={item.field + index} style={thStyle}>{item.title}</th>
                )
              }) : null
            }
          </tr>
        </thead>
        <tbody className="wonder_table_tbody">
          {
            dataSource && dataSource.length ? dataSource.map((item: any, index: number) => (
              <tr className="wonder_table_tbody_tr" key={index + Math.random()}>
                {
                  columns && columns.length ? columns.map((column: any, i: number) => {
                    const tdStyle = {
                      ...bodyStyle,
                      width: column.width ? `${column.width}px` : '',
                      textAlign: column.align ? column.align : '',
                    }
                    const tdContent = column.render ? column.render(item) : (item[column.field] !== undefined ? item[column.field] : '')
                    return (
                      <td
                        className={[tbodyTrClass, column.ellipsis ? 'wonder_table_tbody_td_ellipsis' : ''].join(' ')}
                        key={index + i}
                        style={tdStyle}
                        title={column.ellipsis ? item[column.field] : ''}
                      >
                        <div style={tdStyle}>{tdContent}</div>
                      </td>
                    )
                  }) : null
                }
              </tr>
            )) : (
              <tr className="noTableData">
                <td>
                  <Empty />
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
Table.defaultProps = {
  headStyle: '',
  bodyStyle: '',
  className: '',
  border: false,
  size: 'large',
}
