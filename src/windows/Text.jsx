import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;
  if (!data) return null;

  const { name, image, imageUrl, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>
      <div className="bg-white p-5 space-y-2 h-full overflow-auto">
        {(image || imageUrl) && (
          <img src={image || imageUrl} alt={name} className="w-full h-auto rounded" />
        )}
        {subtitle && <p className="text-lg font-semibold text-gray-600">{subtitle}</p>}
        {Array.isArray(description) &&
          description.map((para, idx) => (
            <p key={idx}>
              {para}
            </p>
          ))}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
