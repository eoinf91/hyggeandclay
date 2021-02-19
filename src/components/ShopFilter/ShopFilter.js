import React from "react";
import ProductWindow from '../ProductWindow/ProductWindow'

import Stud from '../../img/stud.svg'
import Hoop from '../../img/hoop.svg'
import Arch from '../../img/arch.svg'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterList: [
        {
          id: 11,
          name: "Hoop",
          value: "hoop",
        },
        {
          id: 12,
          name: "Stud",
          value: "stud",
        },
        {
            id: 13,
            name: "Arch",
            value: "arch",
        },
        {
          id: 14,
          name: "Blue",
          value: "blue",
        }
      ],
      activeFilter: []
    };
  }

  onFilterChange(filter) {
    const { filterList, activeFilter } = this.state;
    if (filter === "ALL") {
      if (activeFilter.length === filterList.length) {
        this.setState({ activeFilter: [] });
      } else {
        this.setState({ activeFilter: filterList.map(filter => filter.value) });
      }
    } else {
      if (activeFilter.includes(filter)) {
        const filterIndex = activeFilter.indexOf(filter);
        const newFilter = [...activeFilter];
        newFilter.splice(filterIndex, 1);
        this.setState({ activeFilter: newFilter });
      } else {
        this.setState({ activeFilter: [...activeFilter, filter] });
      }
    }
  }

  render() {
    const { filterList, activeFilter } = this.state;
    let filteredList;
    if (
      activeFilter.length === 0 ||
      activeFilter.length === filterList.length
    ) {
      filteredList = this.props.searchList;
    } else {
      filteredList = this.props.searchList.filter(item =>
        this.state.activeFilter.includes(item.node.product.metadata.style) ||
        this.state.activeFilter.includes(item.node.product.metadata.color)
      );
    }
    return (
      <div className="shop-grid">
        <div className="grid-filters">
            <div className="colors">
                <h4>Color:</h4>
                <div className="color-filters">
                <div className="filter-option">
                  <input
                    id="white"
                    className="vis-hidden"
                    type="checkbox"
                    checked={activeFilter.includes("white")}
                    onClick={() => this.onFilterChange("white")}
                  />
                  <label htmlFor="white">
                    <p className="text-green">White</p>
                    <div className="color-white color" />
                  </label>
                </div>
                <div className="filter-option">
                  <input
                      id="blue"
                      className="vis-hidden"
                      type="checkbox"
                      checked={activeFilter.includes("blue")}
                      onClick={() => this.onFilterChange("blue")}
                  />
                  <label htmlFor="blue">
                    <p className="text-green">Blue</p>
                    <div className="color-blue color" />
                  </label>
                </div>
                <div className="filter-option">
                  <input
                    id="copper"
                    className="vis-hidden"
                    type="checkbox"
                    checked={activeFilter.includes("copper")}
                    onClick={() => this.onFilterChange("copper")}
                  />
                  <label htmlFor="copper">
                    <p className="text-green">Copper</p>
                    <div className="color-copper color" />
                  </label>
                </div>
                <div className="filter-option">
                  <input
                    id="green"
                    className="vis-hidden"
                    type="checkbox"
                    checked={activeFilter.includes("green")}
                    onClick={() => this.onFilterChange("green")}
                  />
                  <label htmlFor="green">
                    <p className="text-green">Green</p>
                    <div className="color-green color" />
                  </label>
                </div>
                </div>
            </div>
            <div className="style-filters">
                <h4>Style:</h4>
                <div className="style-options">
                    <div className="style">
                        <div className="style-icon stud">
                            <input
                                id="stud"
                                className="vis-hidden"
                                type="checkbox"
                                checked={activeFilter.includes("stud")}
                                onClick={() => this.onFilterChange("stud")}
                            />
                            <label htmlFor="stud">
                                <img src={Stud} alt="stud" />
                            </label>
                        </div>
                        <p className="text-green">Stud</p>
                    </div>
                    <div className="style">
                        <div className="style-icon arch">
                            <input
                                id="arch"
                                className="vis-hidden"
                                type="checkbox"
                                checked={activeFilter.includes("arch")}
                                onClick={() => this.onFilterChange("arch")}
                            />
                            <label htmlFor="arch">
                                <img src={Arch} alt="arch" />
                            </label>
                        </div>
                        <p className="text-green">Arch</p>
                    </div>
                    <div className="style">
                        <div className="style-icon hoop">
                            <input
                                id="hoop"
                                className="vis-hidden"
                                type="checkbox"
                                checked={activeFilter.includes("hoop")}
                                onClick={() => this.onFilterChange("hoop")}
                            />
                            <label htmlFor="hoop">
                                <img src={Hoop} alt="Hoop" />
                            </label>
                        </div>
                        <p className="text-green">Hoop</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="grid-products">
            <h2>Latest Products</h2>
            <p className='text-green'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
            <div className="four-cols">
                {filteredList.map(item => {
                    const newSku = {
                        sku: item.node.id,
                        name: item.node.product.name,
                        price: item.node.unit_amount,
                        currency: item.node.currency,
                    }
                    return <ProductWindow key={item.id} sku={newSku} slug={item.node.product.metadata.slug} />
                })}
            </div>
          </div>
      </div>
    );
  }
}

export default Search;
