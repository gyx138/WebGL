var PVFabInteraction = 

{

	qualitySettings: 

	{

		_useReflection: true,

		_useAO: false,

		_useBloom: true,

		_useVignette: true,

		_useTAA: false,

		

		get useReflection()

		{

			return this._useReflection;

		},

		

		set useReflection(value)

		{

			if(value != this._useReflection)

			{

				this._useReflection = value;

				this.update();

			}

		},

		

		get useAO()

		{

			return this._useAO;

		},

		

		set useAO(value)

		{

			if(value != this._useAO)

			{

				this._useAO = value;

				this.update();

			}

		},

		get useBloom()

		{

			return this._useBloom;

		},

		

		set useBloom(value)

		{

			if(value != this._useBloom)

			{

				this._useBloom = value;

				this.update();

			}

		},

		get useVignette()

		{

			return this._useVignette;

		},

		

		set useVignette(value)

		{

			if(value != this._useVignette)

			{

				this._useVignette = value;

				this.update();

			}

		},



		update: function() 

		{

			gameInstance.SendMessage("WebGLQuality","ApplySceneQuality")

		}

	},

	browserConnection:

	{

		showMovie: function(url, title, subtitle)

		{
			if(url.endsWith(".avi"))
			{
				url = url.slice(0, -4) + ".mp4";
			}    
			var video_base_path = "videos/";
	
			url = video_base_path + url;
			
			lightbox_open(url, title, subtitle);
			//window.alert("Playing Movie = " + url + ". Title = " + title + ". Subtitle = " + subtitle  + ".");

		},

		showGallery: function(fileName)

		{
			basePath = "images/";
			fileExt = ".json";
			url = basePath + fileName + fileExt;
			lightbox_gallery_openJSON(url);
			//window.alert("Showing Gallery: " + url);

		}	

	}

	

}