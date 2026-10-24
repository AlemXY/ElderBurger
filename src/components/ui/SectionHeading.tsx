import type { ReactNode } from "react";

type Props = {
  overline: string;
  title: string;
  description?: string;
  action?: ReactNode;
  center?: boolean;
};
export const SectionHeading = ({
  overline,
  title,
  description,
  action,
  center = false,
}: Props) => (
  <div className={`section-heading ${center ? "is-centered" : ""}`}>
    <div>
      <span className="eyebrow">
        <span className="eyebrow-dot" />
        {overline}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
    {action && <div className="section-heading-action">{action}</div>}
  </div>
);
