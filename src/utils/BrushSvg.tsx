
export const BrushSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="rect-cp">
          <rect id="rect" x="0" y="0" width="0" height="1">
            <animate
              id="anim"
              attributeName="width"
              dur="2s"
              fill="freeze"
              values="0;1"
            />
          </rect>
        </clipPath>
        {/*clip path for shape;
        clip path should use{clipPathUnits="objectBoundingBox" to stretch to full size
        in this case path should contain points from 0 to 1 (1px size)*/}
        <clipPath id="clip" clipPathUnits="objectBoundingBox">
          <use href="#brush-shape" clipPath="url(#rect-cp)" />
        </clipPath>

        {/*<!-- brush shape -->*/}
        <path id="brush-shape" d="M.261.995A.07.07 0 0 0 .257.978V.975C.258.97.255.972.257.967.259.963.255.96.257.959V.95C.256.943.259.948.257.943.256.934.255.956.255.944.255.937.254.943.253.94.252.939.253.938.254.937.257.934.257.931.26.926.267.907.277.916.284.899.293.885.287.897.29.879.295.874.308.872.312.862.288.866.246.848.22.864.207.871.2.872.188.891.175.892.176.901.161.91.156.928.143.92.138.928c0-.005-.025-.012-.022.01-.007.013.01-.01.011-.003-.001.004.006 0 .004.003L.13.942C.13.947.113.951.111.945.103.948.059.92.089.918.069.889.048.9.029.904.028.901.002.922.008.898.012.884.032.892.029.873.026.872.031.869.029.867c0-.004.002-.012.005-.014A.055.055 0 0 0 .017.85C.021.826.042.831.045.818.044.818.038.815.041.811.042.804.053.795.046.793.041.79.032.788.029.791.026.792.019.799.024.783V.782C.024.784.022.778.022.781.021.786.019.782.022.778.024.774.023.773.02.77.011.75.041.756.045.75.037.732.04.727.048.717.051.714.045.713.046.704.04.698.026.726.019.716L.02.713C.02.711.049.696.036.696.031.688.013.697.011.7.009.699.012.689.015.686c.004-.01-.008 0-.009 0A.083.083 0 0 0 .01.671C-.015.656.013.64.022.638.065.619.022.624.05.602.076.574.047.581.061.565.065.559.049.563.054.556.056.549.035.568.036.554.034.55.047.529.046.527.045.52.061.504.058.495c0-.008.021-.016.024-.022C.09.469.095.459.101.455.102.454.101.453.1.453.093.454.093.447.09.446.087.446.094.439.095.443c.003.002.008 0 .012.005.004.008.001-.003 0-.006C.1.427.133.438.124.42c0-.006.005-.003.002-.009C.12.412.106.413.104.406.104.395.105.393.098.392.088.392.105.381.108.38.117.373.133.38.141.371.143.369.143.369.143.362V.348C.142.342.143.341.151.342.164.342.166.334.179.329.161.323.132.331.118.344v.002c-.001 0 0 .006-.002.001C.113.338.115.354.112.347.107.338.107.36.1.34.098.344.1.32.101.324L.102.32C.106.32.109.307.111.316H.11L.108.32v.002c0 .006.004.01.002.005C.109.324.115.328.115.325.116.32.117.33.118.324.118.317.119.319.12.315.121.311.125.309.125.304c0-.011.001.007.002-.001.002-.008 0 .008.002.001S.122.289.131.283C.133.283.135.281.135.277.136.271.143.276.144.27.14.26.126.277.123.262.121.254.124.257.122.252S.124.252.124.25C.121.245.128.243.128.247c0 .002 0 .002 0 0A.017.017 0 0 0 .135.244C.137.244.138.239.136.239.129.233.144.217.147.217.155.202.113.217.11.212.107.209.11.217.108.216.104.212.101.22.106.206c0 0-.004.003-.002 0C.106.198.112.215.113.205.112.202.121.202.12.205.122.199.131.198.134.195.139.19.14.192.144.188.151.183.13.188.131.187.123.185.055.231.084.194.128.159.184.15.23.132.26.119.281.094.313.079.321.079.338.05.341.074c0 .004.001.001.002.002C.345.074.342.09.344.084.339.11.33.106.375.088.4.081.424.072.449.069.461.086.479.065.497.067c.07-.01.145.008.213.021a.525.525 0 0 1 .129.034C.844.128.854.123.855.13c0 .003.001.004.001.001 0-.004.002.001.003 0C.861.13.861.145.859.136.832.14.793.123.76.123c.021.019.057.01.076.03C.833.158.826.15.821.149.814.149.802.15.793.142.789.15.775.143.77.146.772.151.768.154.762.151.727.147.687.119.652.139c.037.02.079.016.115.035.043.029.096.022.135.042C.887.223.852.214.835.215.826.213.824.214.829.217c.004.001.004.005 0 .008-.005.007.02.007.025.009.009.001.01.002.01.005-.003.007.027.007.029.012C.905.263.867.262.889.269c.024.003.053.029.075.04 0 .004-.005.002-.006.004 0 .003.006.005.003.01-.002.003.001.007.006.01S.975.34.973.34c-.001.002.01.009.013.013C.996.36.983.358.981.365.977.371.964.355.965.375c.002.002.021.013.01.014-.006 0-.004.003-.01.003-.014.004.012.011.014.015C.986.411.954.416.975.425c.006.006.009.001.013.007C.989.437.984.446.985.44.987.435.984.437.984.44S.983.443.977.442C.97.441.968.442.97.448c.002.018.019.014.022.027C.988.486.961.462.958.476.962.503 1 .488.997.509.997.516.99.514.992.527.994.536.99.539.995.541.998.56.982.538.982.547c-.004.017.002.022 0 .024v.002c.003.004-.011 0-.01.009C.972.584.971.585.97.585.96.586.978.604.98.608c.008-.002.015.013.005.02C.985.637.937.619.957.635.98.649.955.642.973.668.974.674.974.68.972.679.97.696.966.692.96.693.952.691.953.703.945.698.942.699.935.701.94.71c.002.006.022.018.015.026C.955.743.952.751.951.75.95.755.936.753.94.764c.003.01.007.005.005.022.001.009-.001 0-.002.002L.939.796C.948.8.939.808.935.813.931.818.934.825.926.816.922.812.921.812.919.819S.903.814.904.82c0 .003.013.008.01.011C.91.837.926.846.93.849.929.859.927.861.93.87.926.877.906.852.903.859c-.004.009.01.012.012.023C.916.887.906.881.906.884.91.894.899.882.898.881S.888.87.887.877c-.004.014.02.018.027.028C.93.914.907.914.905.915c0 .001.008.008.004.011C.908.931.9.921.901.926.914.945.868.935.866.939.807.926.75.894.69.896.674.894.679.901.673.897.668.896.661.885.657.89.656.892.653.89.653.887.62.879.637.881.59.88.563.878.561.88.536.882.532.882.527.891.529.895.526.915.52.903.513.904.485.903.45.918.424.927.418.921.398.928.392.932c.001.009.005.002.005.011 0 .004-.001.004-.002 0C.394.937.394.945.393.943.373.954.352.952.329.962.303.968.298.993.278.992.273.994.265.996.261 1V.995zm0-.019c-.002-.009-.003.019 0 0zM.354.945C.356.942.356.942.352.943L.337.948c0 .003.014 0 .017-.003zM.097.92C.097.919.095.919.095.921.096.924.097.921.097.92zm.04-.007c0-.003-.003-.002-.003 0 0 .004.003.002.003 0zM.111.903C.111.901.11.901.109.902.106.907.111.907.111.903zM.423.902C.429.893.404.901.396.903.394.904.42.908.423.902zm.02-.006c0-.002-.012 0-.006.003C.439.9.441.898.443.896zM.09.897c.003 0-.004-.007-.003 0 .001.004.002-.001.003 0zM.451.894c-.006-.006-.007.008 0 0zM.883.87C.884.867.876.868.88.87c.002.002.002.002.003 0zM.032.84C.031.839.03.841.032.841V.84zM.038.837C.041.834.037.836.036.837c-.001.002 0 .002.002 0zm.007.001C.05.822.038.834.042.835c.002 0 .001.007.003.003zM.943.802C.943.8.94.799.942.802c.001.002.001.002.001 0zM.059.718C.058.717.057.719.059.719V.718zM.055.712c0-.008-.009.005-.002.004L.055.712zm.01.001C.064.71.062.709.062.712c0 .004.003.004.003.001zM.061.711C.063.708.057.709.058.711c-.001.003.002.003.003 0zM.981.47C.981.467.98.467.98.47c0 .002.001.002.001 0zM.985.431H.984c-.001.002.002.002.001 0zM.977.406H.975c-.002.002.004.002.002 0zM.952.39C.951.388.941.38.94.382c.001.002.012.01.012.008zM.146.371C.148.368.144.369.144.371c-.001.002.001.002.002 0zM.948.359C.948.357.931.349.935.355c0 .001.013.007.013.004zM.115.334c0-.003-.001-.002-.001 0s.001.002.001 0zM.189.33C.188.329.187.331.189.331V.33zM.103.327.102.325C.1.324.104.332.103.327zM.105.324v.002-.002zM.137.31C.141.307.165.296.154.283.154.278.179.276.163.27.16.27.147.281.153.284.154.287.147.287.145.294c0 .002 0 .002-.001 0 0-.002-.001-.002 0 0C.144.299.138.3.137.298c0-.001-.001-.002-.001 0C.136.303.13.305.129.31c.001.005.007 0 .008 0zM.16.235C.159.233.157.239.159.237L.16.235zM.827.227c0-.002-.003-.003-.003 0 0 .002.003.002.003 0zM.161.214h.001C.159.205.155.219.161.214zm.661 0C.822.212.82.212.82.214c.001.002.002.002.002 0zm.003.001C.824.214.823.216.825.216V.215zM.171.21C.17.209.169.211.171.211V.21zM.109.208c0-.003-.001-.003-.001 0 0 .002.001.002.001 0zM.123.202.122.205.123.202zm.006.001c0-.008-.001.002-.001.003L.129.203zM.852.132C.851.131.85.133.852.133V.132zM.343.09C.343.087.342.085.342.089c0 .003.001.004.001.001zM.081.976c0-.007-.003-.01.002-.011C.087.964.081.97.083.973.085.973.086.97.086.967.085.965.091.977.092.969c.001-.006.003.013.002.01C.093.978.094.971.093.976.092.98.081.979.081.976zM.073.971V.965c.002.001.002.01 0 .006zM.085.955C.084.948.087.951.088.95.092.949.086.966.085.955zM.42.939.421.937C.422.936.42.943.42.939zM.426.938C.427.935.428.937.426.939V.938zM.13.932c.003-.018.003.009 0 0zM.753.913c0-.003.002-.002.002 0 .001.003-.002.003-.002 0zM.744.911c0-.002.001-.003.002 0 0 .002-.002.002-.002 0zM.196.908C.195.899.2.907.2.909.197.911.196.91.196.908zM.674.903c0-.005.002.002.001.002L.674.903zM.666.901c-.001-.005.001-.006 0 0 0 .002 0 .002 0 0zm.002.001V.899C.67.9.67.905.668.902zM.933.891V.886v.005zM.247.879c0-.002.002-.003.002 0-.001.002-.001.002-.002 0zM.252.875c0-.004.007-.006.006-.003v.002C.261.876.251.88.252.875zM.027.87.028.867C.029.87.027.875.027.87zM.032.816.033.813c0-.001-.001.01-.001.003zM.036.815V.813v.002zM.998.546C.997.541 1.001.547 1 .548L.998.546zM.091.393c0-.002.002-.002.002 0 0 .003-.002.002-.002 0zm.023-.03L.113.359C.117.355.136.351.124.36.121.362.117.369.114.363zm-.007 0h.001c.001.002-.001.002-.001 0zM.097.335V.332v.003zM.112.317C.112.309.108.31.113.302.119.292.119.3.117.305v.002C.123.31.117.312.115.311v.004C.114.315.113.323.112.317zM.119.301C.118.297.122.292.12.3c0 .001 0 .002-.001.001zM.1.214c0-.003.001-.002.002 0C.102.217.1.216.1.214zM.112.205C.113.201.113.201.113.204.113.205.11.21.112.205zm.78-.034C.893.169.896.167.897.168c0 .006-.006.003-.005.003zM.889.169c0-.007.005.006 0 0zM.875.166A.211.211 0 0 0 .837.157L.841.15l.001.004C.844.156.845.145.844.152c0 .002 0 .002 0 0C.849.147.855.155.86.155c.005 0 .014.001.019.006 0 .006-.002.008-.004.005zM.852.156C.852.153.85.154.85.156c-.001.002.002.002.002 0zM.882.15C.88.149.881.141.882.148V.15zM.87.142C.869.136.86.144.861.134.863.127.867.141.869.135.87.133.872.133.873.135.874.144.871.15.87.142zm.006.001c.003-.01.002.009 0 0zM.23.128h.001C.232.129.229.13.23.128zM.341.069c0-.005.002.002.001.002L.341.069zM.354.07C.352.062.357.067.356.056.357.049.364.052.363.042.364.035.365.046.366.043.367.035.37.044.37.041V.039C.372.038.372.047.374.047V.04C.379.034.474-.004.45.035c-.009.004.01.003.007.01 0 .001-.008.003-.008.001C.439.043.424.048.415.042a.039.039 0 0 1-.016.007C.398.045.396.049.395.05.395.047.39.048.389.052.388.058.378.062.378.055.377.057.378.064.376.059.375.057.375.057.375.059.375.063.37.06.37.063.369.07.366.059.366.058c0 .003-.001.009-.002.005C.362.062.355.074.354.07zM.346.06c0-.007.002 0 .001.002L.346.06zM.348.057.349.056C.351.057.347.06.348.057zM.539.051c-.004-.002 0-.006.001 0 0 .004 0 .001-.001 0zM.527.047c.002-.002.002-.002.001 0 0 .001-.003.003-.001 0zm.003 0c0-.003.003.003.001.002L.53.047zM.459.042C.457.035.479.039.478.04c.003-.001.003.002 0 .003C.475.045.477.036.475.044.472.051.471.042.469.045.468.047.467.046.468.042.467.04.46.049.459.042zm.045.003c0-.005.002.002.001.002L.504.045zM.482.041c-.002-.004 0-.003 0 0 .001.002.001.002 0 0zM.697.04C.694.034.683.044.68.033L.683.027c.001-.001 0 .01.002.004.002-.007.003.008.003.001 0-.01.003.002.003.001.002-.007.002.003.006 0C.7.034.703.034.703.039.704.042.697.043.697.04zm.009 0c0-.005.008-.003.003.001C.708.043.706.042.706.04zM.667.033C.666.028.662.034.662.033.659.03.651.032.644.028.64.022.632.036.629.028.601.037.582.02.551.023.539.021.485.026.498.008.535-.012.61.011.65.019.655.021.667.017.665.03.666.029.669.028.669.024v.001c0 .005.007-.001.008.002 0 .002.005.002.003.003C.678.03.678.031.679.032.682.035.668.037.667.033zM.506.015C.505.009.504.018.506.018V.015zM.474.022V.019c-.002.003 0-.006 0-.008.001.012.004.011.002 0C.475.005.482.012.482.008c0-.003.004-.004.004 0 0 .002 0 .002.001 0 .002-.004 0 .005 0 .006.001.009.002-.017.004-.008l.001.012C.494.019.492.022.49.022.483.026.483.005.481.014c0 .003.001-.002.001.003C.482.021.48.016.48.02.481.023.472.028.474.022zM.489.014V.012c-.002 0 0 .006 0 .002zM.466.022C.467.016.468.021.468.011.47.012.467.029.466.022zM.47.016c0-.007.002.002 0 .003V.016zM.472.011C.473.007.477.007.476.013.474.008.47.018.472.011zM.465.01h.001C.467.012.464.012.465.01zm.029 0C.492.007.495.008.495.01s0 .002-.001 0zM.491.006C.49 0 .494.011.492.01L.491.006z" />
      </defs>
    </svg>
  )
}