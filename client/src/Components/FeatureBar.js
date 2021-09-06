import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  LifeBuoy,
  RefreshCcw,
  Truck,
} from "react-feather";

export default function FeatureBar() {
  return (
    <div className="feature__bar">
      <div className="feature__bar__entry">
        <Truck size={50} color="currentColor" strokeWidth={0.8} />
        <div className="feature__bar__entry__content">
          <div className="feature__bar__entry__heading">Low cost shipping</div>
          <div className="feature__bar__entry__description">
            All over Pakistan order above Rs1000
          </div>
        </div>
      </div>
      <div className="feature__bar__entry">
        <RefreshCcw size={50} color="currentColor" strokeWidth={0.8} />
        <div className="feature__bar__entry__content">
          <div className="feature__bar__entry__heading">30 day return</div>
          <div className="feature__bar__entry__description">
            Simply return it within 30 days for an exchange
          </div>
        </div>
      </div>
      <div className="feature__bar__entry">
        <LifeBuoy size={50} color="currentColor" strokeWidth={0.8} />

        <div className="feature__bar__entry__content">
          <div className="feature__bar__entry__heading">Support 24/7</div>
          <div className="feature__bar__entry__description">
            Contact us 24 hours a day, 7 days a week
          </div>
        </div>
      </div>
    </div>
  );
}
