import uploadSvg from '../../assets/upload.svg';

type Props = React.ComponentProps<'input'> & {
  legend?: string;
  filename?: File | null;
};

export function Upload({ filename = null, legend, ...rest }: Props) {
  return (
    <div>
      <legend className="text-xxs mb-2 text-inherit uppercase">{legend}</legend>

      <div className="flex h-12 w-full items-center rounded-lg border border-gray-300 bg-transparent outline-none">
        <input type="file" className="hidden" id="upload" {...rest} />
        <span className="flex-1 pl-4 text-xs text-gray-100">
          {filename ? filename.name : 'Nenhum arquivo selecionado'}
        </span>

        <label
          htmlFor="upload"
          className="flex h-12 cursor-pointer items-center rounded-lg bg-green-100 px-4 text-white transition ease-linear hover:opacity-75 disabled:opacity-50"
        >
          <img src={uploadSvg} alt="Upload" />
        </label>
      </div>
    </div>
  );
}
