import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
}

export const TabsPage = ({ tabs }: Props) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li key={tab.id} data-cy="Tab" className="is-active">
              <a href="#/">{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        Please select a tab
      </div>
    </>
  );
};
