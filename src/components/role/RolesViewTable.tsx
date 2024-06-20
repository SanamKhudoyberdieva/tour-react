import i18n from "../../utils/i18n";
import { getName } from "../../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ModuleItemType, ModuleType } from "../../store/types";
import { getModuleItems, getModules, putRoleItemsList } from "../../api";

const RolesViewTable = () => {
  const param = useParams();
  const roleId = param.id;
  const [modules, setModules] = useState<ModuleType[]>([]);
  const [moduleItems, setModuleItems] = useState<ModuleItemType[]>([]);
  const [checkedModules, setCheckedModules] = useState<number[]>(() => {
    const saved = localStorage.getItem(`checkedModules_${roleId}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [checkedItems, setCheckedItems] = useState<string[]>(() => {
    const saved = localStorage.getItem(`checkedItems_${roleId}`);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (!roleId) return;

    const fetchModulesAndItems = async () => {
      try {
        const modulesResponse = await getModules();
        const modulesData: ModuleType[] = modulesResponse.data;
        setModules(modulesData);
        const res = await getModuleItems();
        setModuleItems(res.data);
      } catch (error) {
        console.error("Error fetching modules or items: ", error);
      }
    };

    fetchModulesAndItems();
  }, [roleId]);

  const handleModuleCheck = (moduleId: number) => {
    setCheckedModules((prev) => {
      const newCheckedModules = prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId];

      localStorage.setItem(
        `checkedModules_${roleId}`,
        JSON.stringify(newCheckedModules),
      );
      return newCheckedModules;
    });

    const moduleItemIds = moduleItems
      .filter((item) => item.module.id === moduleId)
      .map((item) => item.key);

    setCheckedItems((prev) => {
      const newCheckedItems = checkedModules.includes(moduleId)
        ? prev.filter((id) => !moduleItemIds.includes(id))
        : [...prev, ...moduleItemIds];

      localStorage.setItem(
        `checkedItems_${roleId}`,
        JSON.stringify(newCheckedItems),
      );
      return newCheckedItems;
    });
  };

  const handleItemCheck = (itemId: string) => {
    setCheckedItems((prev) => {
      const newCheckedItems = prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId];

      localStorage.setItem(
        `checkedItems_${roleId}`,
        JSON.stringify(newCheckedItems),
      );
      return newCheckedItems;
    });
  };

  const handlePutRoleItemsList = async () => {
    try {
      if (roleId !== undefined) {
        await putRoleItemsList({
          module_item_keys: checkedItems,
          role_id: parseInt(roleId, 10),
        });
      } else {
        throw new Error("roleId is undefined");
      }
    } catch (error) {
      console.log("error putRoleItemsList: ", error);
    }
  };
  let count = 0;

  useEffect(() => {
    count++;
    if (count !== 0) {
      handlePutRoleItemsList();
    }
  }, [checkedItems]);

  if (!roleId) return <></>;

  return (
    <div className="check-list">
      {modules.map((module) => (
        <div key={module.id}>
          <table className="table table-striped table-hover report-table">
            <thead>
              <tr>
                <th style={{ width: "30px" }}>#</th>
                <th>{getName(module, i18n.language)}</th>
                <th className="">
                  <div className="d-flex justify-content-end">
                    <input
                      type="checkbox"
                      className="select-all"
                      name="all"
                      value={module.id}
                      checked={checkedModules.includes(module.id)}
                      onChange={() => handleModuleCheck(module.id)}
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {moduleItems
                .filter((x) => x.module.id === module.id)
                .map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{getName(item, i18n.language)}</td>
                    <td className="">
                      <div className="d-flex justify-content-end">
                        <input
                          type="checkbox"
                          id={`item-${item.id}`}
                          name="Roles[]"
                          value={item.key}
                          checked={checkedItems.includes(item.key)}
                          onChange={() => handleItemCheck(item.key)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RolesViewTable;
