function RadioButtons()
{	
	var options =
	{
		onChangeFunction: function(){}
	};

	radioButton = function( data )
	{
		var radioButtons = '';

		data.forEach(function(obj,index){
			var config =
			{
				name: obj.name,
				id: index,
				text: obj.text,
				value: obj.value
			};

			radioButtons += radioButtonTemplate(config);
		});

		return $(radioButtons).change(options.onchange);
	};

	radioButton.options = function(newOptions)
	{
		options = $.extend(options, newOptions);
	};

	function radioButtonTemplate(data)
	{
		var defaultData = {
			name: "radioButton",
			id: "radioButton",
			text: "Radio Button",
			value: "radioButton"
		};

		data = $.extend(defaultData, data);

		return '<input type="radio" name="'+data.name+'" id="'+data.id+'" value="'+data.value+'">' +
		'<label for="'+data.id+'">'+data.text+'</label>';
	}

	return radioButton;
};